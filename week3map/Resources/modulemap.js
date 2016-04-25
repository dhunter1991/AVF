var win = Ti.UI.createWindow({
	backgroundColor: "#000"
});
var run = function(lat, lng){
var mapModule = ti.map;
var mapview = Titanium.Map.createView({
	top: 100,
	height: 350,
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:lat, 
    		longitude:lng,
            latitudeDelta:0.5, 
            longitudeDelta:0.5},
    animate:true,
    regionFit:true,
    userLocation:false
});
};
exports.run = run;
if(Ti.osname === "iOS"){
win.add(mapview);
navWin.open();
}else{
	win.add(mapView);
	win.open();
}
