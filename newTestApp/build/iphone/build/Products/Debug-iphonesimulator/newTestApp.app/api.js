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
		top: 0,
		font: {fontFamily: "roboto", fontSize: 30, fontWeight: "bold"},
		textAlign: "center"
	});
	var state = Ti.UI.createLabel({
		backGroundColor: "#82cbf9",
		text: UiData.state,
		height: 50,
		width: "100%",
		top: 50,
		font: {fontFamily: "roboto", fontSize: 30, fontWeight: "bold"},
		textAlign: "center"
	});
	var temp = Ti.UI.createLabel({
		backgroundColor: "#9bd6ee",
		text: "tempreture " + UiData.temp,
		height: 100,
		top: 100,
		width: "50%",
		left: 0,
		font: {fontFamily: "roboto", fontSize: 25, fontWeight: "bold"},
		textAlign: "center"
	});
	var feel = Ti.UI.createLabel({
		backgrounColor: "#115df7",
		text: "feels like " + UiData.feelsLike,
		height: 100,
		top: 100,
		width: "50%",
		right: 0,
		font: {fontFamily: "roboto", fontSize: 25, fontWeight: "bold"},
		textAlign: "center"
	});
	var humidity = Ti.UI.createLabel({
		backgroundcolor: "#115df7",
		text: "relative humidity " + UiData.humidity,
		height: 100,
		top: 250,
		width: "100%",
		font: {fontFamily: "roboto", fontSize: 20, fontWeight: "bold"},
		textAlign: "center"
	});
	var wind = Ti.UI.createLabel({
		text: "wind speed " + UiData.wind + " mph",
		top: 350
		
	});
	var icon = Ti.UI.createImageView({
		image: UiData.icon ,
		top: 400,
	});
	mainWin.add(wind, humidity, feel, temp, city, state, icon);
	mainWin.open();
};
exports.Ui = Ui;
