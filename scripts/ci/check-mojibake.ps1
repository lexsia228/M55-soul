param(
  [string]$Root = "."
)

$utf8Strict = New-Object System.Text.UTF8Encoding($false, $true)
$repChar = [char]0xFFFD

# Mojibake token signatures (kept as ASCII source; converted at runtime)
# IMPORTANT: do NOT place literal mojibake glyphs here (self-detect risk)
$tokens = @(
  "`u7E67","`u7E5D","`u7E3A","`u7E32",
  "`u7E3A`uFF6A","`u7E3A`uFF6E","`u7E3A`uFF6F",
  "`u7E67`uFF7F","`u7E5D`uFF6D","`u7E5D`uFF7B",
  "`u5E62`uFF7D","`u9B29","`u90E2","`u6662"
)

function Count-Token([string]$s, [string[]]$ts){
  if([string]::IsNullOrEmpty($s)){ return 0 }
  $c=0
  foreach($t in $ts){
    if([string]::IsNullOrWhiteSpace($t)){ continue }
    $idx=0
    while($true){
      $p = $s.IndexOf($t, $idx, [System.StringComparison]::Ordinal)
      if($p -lt 0){ break }
      $c++; $idx = $p + $t.Length
      if($idx -ge $s.Length){ break }
    }
  }
  return $c
}

function Count-Char([string]$s, [char]$c){
  if([string]::IsNullOrEmpty($s)){ return 0 }
  return ([regex]::Matches($s, [regex]::Escape([string]$c))).Count
}

# Excludes
$excludeDirRx = '[\\/](node_modules|\.next|dist|out|\.git)[\\/]'
$excludeArch  = '[\\/]docs[\\/]archive[\\/]'

# Only scan text-like extensions (avoid binaries)
$extOk = @('.ts','.tsx','.js','.css','.html','.json','.md','.yml','.yaml','.ps1')

$files = Get-ChildItem -LiteralPath $Root -Recurse -File |
  Where-Object {
    $extOk -contains $_.Extension.ToLowerInvariant() -and
    $_.FullName -notmatch $excludeDirRx -and
    $_.FullName -notmatch $excludeArch  -and
    $_.Name -notmatch '\.bak' -and
    $_.Name -notmatch '\.log$' -and
    $_.Name -notmatch '\.tsv$' -and
    $_.Name -notmatch '\.csv$' -and
    $_.Name -notmatch '^_audit_' -and
    $_.FullName -notmatch '[\\/]scripts[\\/]ci[\\/]check-mojibake\.ps1$'
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
  Write-Host "NG: mojibake detected" -ForegroundColor Red
  $out = "_audit_mojibake_found.csv"
  $bad | Sort-Object Reason,Path | Export-Csv -NoTypeInformation -Encoding UTF8 $out
  Write-Host ("Wrote: {0}" -f $out) -ForegroundColor Yellow

  # Print without truncation
  ($bad | Sort-Object Reason,Path | Select-Object Path,Reason,MojiTok,UFFFD |
    Format-Table -AutoSize | Out-String -Width 4000) | Write-Host
  exit 1
}

Write-Host "OK: mojibake tokens=0, U+FFFD=0, UTF-8 strict=OK" -ForegroundColor Green
exit 0