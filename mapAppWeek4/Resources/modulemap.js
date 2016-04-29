var data = function(lat, lng){
	var url = "https://api.foursquare.com/v2/venues/search?ll=38.24,-78.11&radius=100&client_id=KD2SISOWGCQ2QU1ZAENHUC41JD4T2YR5GXGVZCY5OICGODD5&client_secret=0EN33YU2BD3DABMPVDI5Q515LO0FUZVJ0YAHGIDDIC3SA5BS&v=20160429";
	 if (Ti.Network.online){
	 	var getData = Ti.Network.createHTTPClient();
	 	getData.onload = function(e){
	 		var json = JSON.parse(this.responseText);
	 		console.log(json);
	 		var dataArray = [];
	 		var dataInfo = {
	 			name: json.response.venues[i].name,
	 			location: json.response.venues[i].location,
	 			lat: json.response.venues[i].lat,
	 			lng: json.response.venues[i].lng,
	 			phone: json.response.venues[i].formattedphone
	 			
	 		};
	 		dataArray.push(dataInfo);
	 	};
	 	getData.open("GET", url);
	 	getData.send();
	 }else{
	 	alert("no location found, please try again");
	 	timeout: 5000;
	 }
};
var run = function(dbArray){
var MapModule = require('ti.map');
var win = Ti.UI.createWindow({
	backgroundColor: "#000"
});
var show = MapModule.createAnnotation({
    latitude: -33.8569,
    longitude: 151.2153,
    centerOffset: {x: 80, y: 25},
    image: 'SydneyOperaHouse.jpg',
    title: 'Sydney Opera House',
    subtitle: 'Sydney, New South Wales, Australia',    
});
var mapview = MapModule.createView({
	top: 100,
	height: 350,
    mapType: MapModule.STANDARD_TYPE,
    region: {latitude:dbArray.lat, 
    		longitude:dbArray.lng,
            latitudeDelta:0.5, 
            longitudeDelta:0.5},
    animate:true,
    regionFit:true,
    userLocation:false,
    width: Ti.UI.FILL
});
win.add(mapview);
navWin.open();
};

//https://api.foursquare.com/v2/venues/search?ll=38.2454,-78.11&radius=500&client_id=KD2SISOWGCQ2QU1ZAENHUC41JD4T2YR5GXGVZCY5OICGODD5&client_secret=0EN33YU2BD3DABMPVDI5Q515LO0FUZVJ0YAHGIDDIC3SA5BS&v=20160429
exports.run = run;
exports.data = data;

