// doit.js

// 何かの処理
(function() {
    // ネームスペース定義
    fcapp.doit = {};
    var wifiUsed = true;
    // tabボタンを押した時の処理
	fcapp.doit.post = function(_args) {    
        Ti.API.debug(_args+" tapped");
  	};
  	
  	fcapp.doit.disp = function(){
  		Ti.API.info(fcapp.ui.params.usedWifi);
  	}

})();

