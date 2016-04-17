var tbl = [];

var create = function(lat, lng) {
	var db = Ti.Database.open("locationInfo");
	db.execute("CREATE TABLE IF NOT EXISTS asdTBL (id INTEGER PRIMARY KEY, city TEXT, state TEXT, temp TEXT, icon BLOB, feelslike TEXT, humidity TEXT, wind TEXT, forecast TEXT, weather TEXT, time TEXT, zip TEXT, gust TEXT, dew TEXT, heat TEXT, chill TEXT, visibility TEXT)");
	var rows = db.execute("SELECT id, city, state, temp, icon, feelslike, humidity, wind, forecast, weather, time, zip, gust, dew, heat, chill, visibility");
	while (rows.isValidRow()){
		tbl.push({
			id: rows.fieldByName("id"),
			city: rows.fieldByName("city"),
			state: rows.fieldByName("state"),
			temp: rows.fieldByName ("temp"),
			icon: rows.fieldByName ("icon"),
			feelslike: rows.fieldByName ("feelslike"),
			humidity: rows.fieldByName ("humidity"),
			wind: rows.fieldByName ("wind"),
			forecast: rows.fieldByName ("forecast"),
			weather: rows.fieldByName ("weather"),
			time: rows.fieldByName ("time"),
			zip: rows.fieldByName ("zip"),
			gust: rows.fieldByName ("gust"),
			dew: rows.fieldByName ("dew"),
			heat: rows.fieldByName ("heat"),
			chill: rows.fieldByName ("chill"),
			visibility: rows.fieldByName ("visibility")
		});
		rows.next();
	};
	console.log(tbl);
	rows.close();
	db.close();
	var ui = require("ui");
	ui.UiData(tbl);
};
var update = function(info) {
	var last = Ti.Database.open("locationInfo");
	last.execute ("CREATE TABLE IF NOT EXISTS asdTBL (id INTEGER PRIMARY KEY, city TEXT, state TEXT, temp TEXT, icon TEXT, feelslike TEXT, humidity TEXT, wind TEXT, forecast TEXT, weather TEXT, time TEXT, zip TEXT, gust TEXT, dew TEXT, heat TEXT, chill TEXT, visibility TEXT)");
	last.execute ("delete FROM asdTBL");
	last.execute ("INSERT INTO asdTBL (city, state, temp, icon, feelslike, humidity, wind, forecast, weather, time, zip, gust, dew, heat, chill, visibility");
	last.close();
	read();
};
exports.create = create;
exports.update = update;