# Mobile Shipping Notes (iOS / Android)

このKitは「静的出力 `out/`」を前提に、
**同梱型（Capacitor）** と **ホスト型（WebView/TWA）** のどちらにも対応できます。

---

## A. 同梱型（推奨：Capacitor）

### 1) 初期化

```bash
npm run cap:init
npm run cap:add:ios
npm run cap:add:android
```

### 2) ビルド + 同期

```bash
npm run build
npm run cap:sync
```

### 3) IDE で開く

```bash
npm run cap:open:ios
npm run cap:open:android
```

> iOS/Android のアイコン/スプラッシュは、最後に `@capacitor/assets` 等で生成すると効率的です。

---

## B. ホスト型（WebView / TWA）

- `out/` を静的ホスティングへデプロイし、アプリ側はその URL を表示するだけ。
- 審査/UX の要件はプロジェクト方針に依存します。

---

## 共通の注意

- **監査ゲートは必ず通す**：`npm run audit`
- **userHash は生成しない**：欠損は Fail-Closed（権利/永続付与の不整合を防ぐ）
- **policies/*.json が唯一の回数/保存/付与/クールタイム根拠**
- **JSON整合（SHA-256）** がズレると起動停止（誤動作・監査違反を防ぐ）

---

## Core Experience Add-ons (Haptics / Widget / Artifact)

### 1) Haptics（Digital Weight）

このKitは `@capacitor/haptics` を利用できる前提のブリッジを同梱しています。

```bash
npm i @capacitor/haptics
npx cap sync
```

利用箇所は `public/legacy/js/m55_haptics_bridge.js` を参照。

### 2) Silent Widget（霧の濃さ）

JS側は `publishWidgetSnapshot({ density, shortText })` でスナップショットを保存します。

- iOS: WidgetKit（App Group / UserDefaults）で `m55_widget_snapshot_v1` を読む
- Android: AppWidget/Glance で同キーを読む

スナップショット保存は `@capacitor/preferences` を優先し、未対応環境では localStorage へフォールバックします。

```bash
npm i @capacitor/preferences
npx cap sync
```

### 3) Cryptic Artifact（抽象の石を書き出す）

MyPageの `石の断片を書き出す` は Web Share API（files）を優先して共有し、非対応の場合はPNGをダウンロードします。

> 共有UIはOS標準のもののみ。アプリ内でのSNS特化導線は作りません。
