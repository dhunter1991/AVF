var data = function(lat, lng){
	var url = "https://api.foursquare.com/v2/venues/search?ll=38.24,-78.11&radius=100&client_id=KD2SISOWGCQ2QU1ZAENHUC41JD4T2YR5GXGVZCY5OICGODD5&client_secret=0EN33YU2BD3DABMPVDI5Q515LO0FUZVJ0YAHGIDDIC3SA5BS&v=20160429";
	 	var getData = Ti.Network.createHTTPClient({
	 	       onload: function(e){
	 		var json = JSON.parse(this.responseText);
	 		console.log(json);
	 		var dataInfo = {
	 			name: json.response.venues.name,
	 			location: json.response.venues.location,
	 			lat: json.response.venues.lat,
	 			lng: json.response.venues.lng,
	 			phone: json.response.venues.formattedphone
	 			
	 		};
	 	var mapData = require("modulemap");
	 	mapData = run(mapData);
	 	},
	 	onerror: function(e){
			alert("error has occured please check connection");
			},
			timeout: 5000
	 });
	 	getData.open("GET", url);
	 	getData.send();
};
exports.data = data;