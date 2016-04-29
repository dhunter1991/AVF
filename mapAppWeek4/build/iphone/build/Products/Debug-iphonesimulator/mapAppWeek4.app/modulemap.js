
var run = function(dataInfo){
var MapModule = require('ti.map');
var win2 = Ti.UI.createWindow({
	backgroundColor: "#000"
});
var annotations = MapModule.createAnnotation({
	latitude: dataInfo.lat,
	longitude: dataInfo.lng,
	title: dataInfo.name,
	subtitle: dataInfo.location
});
var mapview = MapModule.createView({
	top: 0,
	height: 350,
    mapType: MapModule.STANDARD_TYPE,
    region: {latitude:38.2454, 
    		longitude:-78.1108,
            latitudeDelta:0.5, 
            longitudeDelta:0.5},
    animate:true,
    regionFit:true,
    userLocation:false,
    width: Ti.UI.FILL
});
win2.add(mapview);
navWindow.openWindow(win2);
};

//https://api.foursquare.com/v2/venues/search?ll=38.2454,-78.11&radius=500&client_id=KD2SISOWGCQ2QU1ZAENHUC41JD4T2YR5GXGVZCY5OICGODD5&client_secret=0EN33YU2BD3DABMPVDI5Q515LO0FUZVJ0YAHGIDDIC3SA5BS&v=20160429
exports.run = run;


