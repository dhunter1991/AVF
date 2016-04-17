var Api = function(lat, lng){
	console.log(Api);
	var url = "http://api.wunderground.com/api/7e2a0de38337b6b0/conditions/hourly/forecast/q/" + lat + "," + lng + ".json";
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
				wind: json.current_observation.wind_mph,
				forecast: json.current_observation.forecast_url,
				weather: json.current_observation.weather,
				time: json.current_observation.observation_time,
				zip: json.current_observation.display_location.zip,
				gust: json.current_observation.wind_gust_mph,
				dew: json.current_observation.dewpoint_f,
				heat: json.current_observation.heat_index_string,
				chill: json.current_observation.windchill_f,
				visibility: json.current_observation.visibility_mi,
			};
			console.log(UiData);
			var Uiview = require("api");
			Uiview.Ui(UiData);
		},
		onerror: function(e){
			alert("error has occured please check connection");
			var dbView = require("db");
			dbView.db(rows);
			console.log(rows);
		},
		timeout: 5000
	});
	data.open("GET", url);
	data.send();
};
exports.Api = Api;