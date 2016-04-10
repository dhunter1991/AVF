var geoFun = function(){
	if(Ti.Geolocation.locationServicesEnabled){
	Ti.Geolocation.getCurrentPosition(function(e){
		console.log(e);
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var ui = require("ui");
		ui.Api(lat, lng);
	});
}else{
	alert("please enable geolocation on your device to retrieve weather information");
}
};
exports.geoFun = geoFun;

