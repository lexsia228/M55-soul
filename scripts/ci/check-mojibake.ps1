param(
  [string]$Root = "."
)

$utf8Strict = New-Object System.Text.UTF8Encoding($false, $true)
$repChar = [char]0xFFFD

# Typical mojibake fragments (expand only when needed)
$tokens = @("繧","繝","縺","縲","縺ｪ","縺ｮ","縺ｯ","繧ｿ","繝ｭ","繝ｻ","幢ｽ","鬩","郢","晢")

function Count-Token([string]$s, [string[]]$ts){
  if([string]::IsNullOrEmpty($s)){ return 0 }
  $c=0
  foreach($t in $ts){
    if([string]::IsNullOrWhiteSpace($t)){continue}
    $idx=0
    while($true){
      $p=$s.IndexOf($t,$idx,[System.StringComparison]::Ordinal)
      if($p -lt 0){break}
      $c++; $idx=$p+$t.Length
      if($idx -ge $s.Length){break}
    }
  }
  return $c
}

function Count-Char([string]$s, [char]$c){
  if([string]::IsNullOrEmpty($s)){ return 0 }
  return ([regex]::Matches($s,[regex]::Escape([string]$c))).Count
}

# Cross-platform exclude (Linux/Windows path separators)
$excludeDirRx = '[\\/](node_modules|\.next|dist|out)[\\/]'
$excludeArch  = '[\\/]docs[\\/]archive[\\/]'

$files = Get-ChildItem -LiteralPath $Root -Recurse -File -Include *.tsx,*.ts,*.js,*.css,*.html,*.json |
  Where-Object {
    $_.FullName -notmatch $excludeDirRx -and
    $_.FullName -notmatch $excludeArch  -and
    $_.Name -notmatch '\.bak' -and
    $_.Name -notmatch '\.log$' -and
    $_.Name -notmatch '\.tsv$'
  }

$bad = @()

foreach($fi in $files){
  $b = $null
  try {
    $b = [System.IO.File]::ReadAllBytes($fi.FullName)
  } catch {
    $bad += [pscustomobject]@{ Path=$fi.FullName; Reason="Unreadable"; MojiTok=0; UFFFD=0 }
    continue
  }

  $s = $null
  try {
    $s = $utf8Strict.GetString($b)  # strict UTF-8 decode
  } catch {
    $bad += [pscustomobject]@{ Path=$fi.FullName; Reason="NonUTF8"; MojiTok=0; UFFFD=0 }
    continue
  }

  $m = Count-Token $s $tokens
  $u = Count-Char  $s $repChar
  if($m -gt 0 -or $u -gt 0){
    $bad += [pscustomobject]@{ Path=$fi.FullName; Reason="Mojibake"; MojiTok=$m; UFFFD=$u }
  }
}

if($bad.Count -gt 0){
  Write-Host "NG: mojibake/non-utf8 detected (CI guard FAIL)" -ForegroundColor Yellow
  $bad |
    Sort-Object -Property @{Expression="Reason";Descending=$false}, @{Expression="MojiTok";Descending=$true}, @{Expression="UFFFD";Descending=$true}, @{Expression="Path";Descending=$false} |
    Format-Table -AutoSize
  exit 1
}

Write-Host "OK: mojibake tokens = 0, U+FFFD = 0, UTF-8 strict = OK" -ForegroundColor Green
exit 0