var Ui = function(UiData){
	var mainWin = Ti.UI.createWindow({
		backgroundColor: "#fff",
		
	});
	var image = Ti.UI.createImageView({
		image: "images/bg.jpg",
		width: "100%",
		height: "100%"
	});
	var icon = Ti.UI.createImageView({
		image: UiData.icon ,
		top: "30%",
		width: "10%",
		height: "10%",
	});
	var city = Ti.UI.createLabel({
		color: "fff",
		text: UiData.city,
		width: "100%",
		top: "10%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var state = Ti.UI.createLabel({
		color: "#fff",
		text: UiData.city + "," + UiData.state,
		width: "100%",
		top: "10%",
		font: {fontFamily: "roboto", fontSize: 40, fontWeight: "bold"},
		textAlign: "center"
	});
	var temp = Ti.UI.createLabel({
		color: "#fff",
		text: UiData.temp + "° f",
		top: "30%",
		left: 10,
		font: {fontFamily: "roboto", fontSize: 50, fontWeight: "bold"},
		textAlign: "center"
	});
	var tempString = Ti.UI.createLabel({
		color:"#fff",
		text: "current Temp:",
		top: "28%",
		left: 10,
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var feel = Ti.UI.createLabel({
		color: "#fff",
		text: "feels like: " + UiData.feelsLike + "° f",
		top: "36%",
		left: 10,
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var humidity = Ti.UI.createLabel({
		color: "#fff",
		text: "relative humidity: " + UiData.humidity,
		top: "57%",
		width: "100%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var wind = Ti.UI.createLabel({
		text: "wind speed: " + UiData.wind + " mph",
		color: "#fff",
		top: "28%",
		right: 5,
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
	});
	var gust = Ti.UI.createLabel({
		text: "Gust speeds: " + UiData.gust + " mph",
		color: "#fff",
		top: "31%",
		right: 5,
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"}	
	});
	var heat = Ti.UI.createLabel({
		text: "heat index: " + UiData.heat,
		color: "#fff",
		top: "60%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
	});
	var chill = Ti.UI.createLabel({
		text: "wind chill: " + UiData.chill,
		color: "#fff",
		top: "34%",
		right: 5,
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
	});
	var dew = Ti.UI.createLabel({
		text: "dew point: " + UiData.dew + "° f",
		color: "#fff",
		top: "63%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
	});
	var vis = Ti.UI.createLabel({
		text: "visibility in miles: " + UiData.visibility,
		color: "#fff",
		top: "66%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
	});
	var forecast =Ti.UI.createLabel({
		text: UiData.forecast,
		color: "#fff",
		top: "85%"
	});
	var weather = Ti.UI.createLabel({
		text: UiData.weather,
		color: "#fff",
		top: "18%",
		font: {fontFamily: "roboto", fontSize: 35, fontWeight: "bold"},
	});
	var time = Ti.UI.createLabel({
		text: UiData.time,
		color: "#fff",
		top: "80%"
	});
	var zip = Ti.UI.createLabel({
		text: UiData.zip,
		color: "#fff",
		top: "16%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
	});
	var retry = Ti.UI.createButton({
		text: "retry",
		top: "95%",
		height: 30,
	});
	mainWin.add(image);
	mainWin.add(state);
	mainWin.add(temp);
	mainWin.add(feel);
	mainWin.add(humidity);
	mainWin.add(wind);
	mainWin.add(icon);
	mainWin.add(forecast);
	mainWin.add(weather);
	mainWin.add(time);
	mainWin.add(tempString);
	mainWin.add(zip);
	mainWin.add(heat);
	mainWin.add(vis);
	mainWin.add(dew);
	mainWin.add(chill);
	mainWin.add(gust);
	mainWin.add(retry);
	mainWin.open();
};
exports.Ui = Ui;
