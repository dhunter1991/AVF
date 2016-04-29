var geoFun = function() {
	if (Ti.Platform.osname === "android") {
		var lat = 38.2454;
		var lng = -78.1108;
		var uiMod = require("modulemap");
		uiMod.run(lat, lng);
	} else {
		if (Ti.Geolocation.locationServicesEnabled) {
			Ti.Geolocation.getCurrentPosition(function(e){
				if (e.error) {
					console.log(e.error);
				} else {
					console.log(e);
					var lat = e.coords.latitude;
					var lng = e.coords.longitude;
					var uiMod = require("modulemap");
					uiMod.run(lat, lng);
				}
				var save = require("db");
				save.save(lat,lng);
			});
		} else {
			alert("No connection loading map from last location");
			var read = require("db");
			read.read(lat,lng);
		}
	}
};
exports.geoFun = geoFun;
signOn.addEventListener("click", geofun);