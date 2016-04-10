var Ui = function(UiData){
	var mainWin = Ti.UI.createWindow({
		backgroundColor: "#white",
		
	});
	var image = Ti.UI.createImageView({
		image: "images/back.png",
		width: "100%",
		height: "100%"
	});
	var city = Ti.UI.createLabel({
		color: "white",
		text: UiData.city,
		height: 50,
		width: "100%",
		top: 20,
		font: {fontFamily: "roboto", fontSize: 30, fontWeight: "bold"},
		textAlign: "center"
	});
	var state = Ti.UI.createLabel({
		color: "white",
		text: UiData.state,
		height: 50,
		width: "100%",
		top: 70,
		font: {fontFamily: "roboto", fontSize: 30, fontWeight: "bold"},
		textAlign: "center"
	});
	var temp = Ti.UI.createLabel({
		color: "white",
		text: "tempreture: " + UiData.temp + " f",
		height: 100,
		top: 120,
		width: "50%",
		left: 0,
		font: {fontFamily: "roboto", fontSize: 25, fontWeight: "bold"},
		textAlign: "center"
	});
	var feel = Ti.UI.createLabel({
		color: "white",
		text: "feels like: " + UiData.feelsLike + " f",
		height: 100,
		top: 120,
		width: "50%",
		right: 0,
		font: {fontFamily: "roboto", fontSize: 25, fontWeight: "bold"},
		textAlign: "center"
	});
	var humidity = Ti.UI.createLabel({
		color: "white",
		text: "relative humidity " + UiData.humidity,
		height: 100,
		top: 270,
		width: "100%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var wind = Ti.UI.createLabel({
		text: "wind speed " + UiData.wind + " mph",
		color: "white",
		top: 370
		
	});
	var icon = Ti.UI.createImageView({
		image: UiData.icon ,
		top: 420,
	});
	mainWin.add(image, wind, humidity, feel, temp, city, state, icon);
	mainWin.open();
};
exports.Ui = Ui;
