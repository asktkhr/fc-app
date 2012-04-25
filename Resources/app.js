// app.js

// 背景色設定
Titanium.UI.setBackgroundColor('#fff');


// アプリネームスペース定義
var fcapp = {};


// UI処理の読み込み
Titanium.include('ui.js');

// 何かの処理の読み込み
Titanium.include('doit.js');


// tabGroupの作成
fcapp.mainWindow = fcapp.ui.createMainWindow();


// tabGroupオープン
fcapp.mainWindow.open();
