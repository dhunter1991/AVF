

var create = function(UiData) {
	console.log(create);
	var db = Ti.Database.open("locationInfo");
	db.execute("CREATE TABLE IF NOT EXISTS asdTBL (id INTEGER PRIMARY KEY, city TEXT, state TEXT, temp TEXT, icon , feelslike TEXT, humidity TEXT, wind TEXT, forecast TEXT, weather TEXT, time TEXT, zip TEXT, gust TEXT, dew TEXT, heat TEXT, chill TEXT, visibility TEXT)");
	db.execute ("INSERT INTO asdTBL (city, state, temp, icon, feelslike, humidity, wind, forecast, weather, time, zip, gust, dew, heat, chill, visibility)");
	db.close();
	read();
};
var read = function(){
	console.log(read);
	var db = Ti.Database.open("locationInfo");
	var rows = db.execute("SELECT city, state, temp, icon, feelslike, humidity, wind, forecast, weather, time, zip, gust, dew, heat, chill, visibility FROM asdTBL");
	if (rows.rowCount > 0){
	var dbArray = [];
	while (rows.isValidRow()){
		var dbInfo = {
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
		};
		dbArray.push(dbInfo);
		rows.next();
	}
	var uiModule = require("api");
	uiModule.api(dbArray);
	}else{
		alert("no previous data");
	}
rows.close();
db.close();
};
exports.create = create;
exports.read = read;