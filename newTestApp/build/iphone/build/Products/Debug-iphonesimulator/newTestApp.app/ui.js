var Api = function(lat, lng){
	console.log(Api);
	var url = "http://api.wunderground.com/api/7e2a0de38337b6b0/conditions/q/" + lat + "," + lng + ".json";
	console.log(url);
	var data = Ti.Network.createHTTPClient({
		onload: function(e){
			var json = JSON.parse(this.responseText);
			console.log(json);
			var UiData = {
				city: json.current_observation.display_location.city,
				state: json.current_observation.display_location.state,
				temp: json.current_observation.temp_f,
				icon: json.current_observation.icon_url,
				feelsLike: json.current_observation.feelslike_f,
				humidity: json.current_observation.relative_humidity,
				wind: json.current_observation.wind_mph
			};
			console.log(UiData);
			var Uiview = require("api");
			Uiview.Ui(UiData);
		},
		onerror: function(e){
			alert("error has occured please check connection");
		},
		timeout: 5000
	});
	data.open("GET", url);
	data.send();
};
exports.Api = Api;
