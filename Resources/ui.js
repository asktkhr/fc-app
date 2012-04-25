// ui.js

// UI処理
(function() {
	// ネームスペース定義
	fcapp.ui = {};
	fcapp.ui.params = {}
	var usedWifi = true;
	fcapp.ui.params.usedWifi = usedWifi;

	fcapp.ui.createInfomationView = function(labelText) {
		var container = Ti.UI.createView({
			layout : "horizontal",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			top : "10dip"
		});

		var infoLabel = Ti.UI.createLabel({
			text : labelText + "：",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});

		var displayData = Ti.UI.createLabel({
			text : labelText + "registered data",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});
		container.add(infoLabel);
		container.add(displayData);

		return container;
	};

	fcapp.ui.createMainWindow = function() {
		var window = Titanium.UI.createWindow({
			title : "register usage history",
		});
		var verticalLayout = Ti.UI.createView({
			layout : "vertical",
			top : "50dip",
		});

		var views = [];
		views.push(fcapp.ui.createInfomationView("部門"));
		views.push(fcapp.ui.createInfomationView("名前"));

		var purposeContainer = Ti.UI.createView({
			layout : "horizontal",
			top : "40dip",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});

		var purposeLabel = Ti.UI.createLabel({
			text : "用途：",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE
		});

		var purpose = Ti.UI.createTextField({
			width : "70%",
			height : Ti.UI.SIZE,
			borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			value : "default"
		});
		purposeContainer.add(purposeLabel);
		purposeContainer.add(purpose);
		views.push(purposeContainer);

		var wifiContainer = Ti.UI.createView({
			layout : "horizontal",
			top : "40dip",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});

		var wifiLabel = Ti.UI.createLabel({
			text : "WiFi利用：",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE
		});

		var wifiButton = Ti.UI.createButton({
			title : usedWifi ? "有り" : "",
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});
		wifiButton.addEventListener('click', function(event) {
			usedWifi = !usedWifi;
			fcapp.doit.disp();
			fcapp.ui.params.usedWifi = usedWifi;
			wifiButton.title = usedWifi ? "有り" : "無し";
		});
		wifiContainer.add(wifiLabel);
		wifiContainer.add(wifiButton);
		views.push(wifiContainer);

		var postButton = Ti.UI.createButton({
			title : "記入",
			width : "80%",
			height : Ti.UI.SIZE,
			bottom : "20dip"
		});

		views.forEach(function(view) {
			verticalLayout.add(view);
		});
		window.add(verticalLayout);
		window.add(postButton);
		return window;
	};

})();

