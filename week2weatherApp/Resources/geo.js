var geoFun = function() {
	if (Ti.Platform.osname === "android") {
		var lat = 38.2454;
		var lng = -78.1108;
		var uiMod = require("ui");
		uiMod.Api(lat, lng);
	} else {
		if (Ti.Geolocation.locationServicesEnabled) {
			Ti.Geolocation.getCurrentPosition(function(e){
				if (e.error) {
					console.log(e.error);
				} else {
					console.log(e);
					var lat = e.coords.latitude;
					var lng = e.coords.longitude;
					var uiMod = require("ui");
					uiMod.Api(lat, lng);
				}
			});
		} else {
			alert("please enable location services to retreieve weather information");
			var database = ("db");
			database.open();
		}
	}
};
exports.geoFun = geoFun;
