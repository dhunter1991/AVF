Titanium.UI.setBackgroundColor('#000');

if (Ti.Network.online === true){
var start = require("geo");
start.geoFun();
}else{
	alert("Network is needed to pull weather information. pulling up information from lat login!");
};


