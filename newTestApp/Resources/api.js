var Ui = function(UiData){
	var mainWin = Ti.UI.createWindow({
		backgroundColor: "#9bd6ee",
		header: "weather App"
	});
	var city = Ti.UI.createLabel({
		backgroundColor: "#82cbf9",
		text: UiData.city,
		height: 50,
		width: "100%",
		top: 20,
		font: {fontFamily: "roboto", fontSize: 30, fontWeight: "bold"},
		textAlign: "center"
	});
	var state = Ti.UI.createLabel({
		backgroundColor: "#82cbf9",
		text: UiData.state,
		height: 50,
		width: "100%",
		top: 70,
		font: {fontFamily: "roboto", fontSize: 30, fontWeight: "bold"},
		textAlign: "center"
	});
	var temp = Ti.UI.createLabel({
		backgroundColor: "#9bd6ee",
		text: "tempreture " + UiData.temp,
		height: 100,
		top: 120,
		width: "50%",
		left: 0,
		font: {fontFamily: "roboto", fontSize: 25, fontWeight: "bold"},
		textAlign: "center"
	});
	var feel = Ti.UI.createLabel({
		backgrounColor: "#9bd6ee",
		text: "feels like " + UiData.feelsLike,
		height: 100,
		top: 120,
		width: "50%",
		right: 0,
		font: {fontFamily: "roboto", fontSize: 25, fontWeight: "bold"},
		textAlign: "center"
	});
	var humidity = Ti.UI.createLabel({
		backgroundcolor: "#9bd6ee",
		text: "relative humidity " + UiData.humidity,
		height: 100,
		top: 270,
		width: "100%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var wind = Ti.UI.createLabel({
		text: "wind speed " + UiData.wind + " mph",
		top: 370
		
	});
	var icon = Ti.UI.createImageView({
		image: UiData.icon ,
		top: 420,
	});
	mainWin.add(wind, humidity, feel, temp, city, state, icon);
	mainWin.open();
};
exports.Ui = Ui;
