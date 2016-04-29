var read = function(){
	console.log("read");
	var db = Ti.Database.open("locationInfo");
	var rows = db.execute("SELECT lat, lng FROM asdTBL");
	if (rows.rowCount > 0){
		var dbArray = [];
		while (rows.isValidRow()){
			var dbInfo = {
				id: rows.fieldByName("id"),
				lat: rows.fieldByName("lat"),
				lng: rows.fieldByName("lng"),
			};
			dbArray.push(dbInfo);
			rows.next();
		}
		var uiCoords = require("modulemap");
		uiCoords.run(dbArray);
	}else
	alert("no previous data");
};
var save = function(lat,lng){
	console.log(read);
	var db =Ti.Database.open("locationInfo");
	db.execute("CREATE TABLE IF NOT EXISTS asdTBL (id INTEGER PRIMARY KEY, lat TEXT, lng TEXT)");
	db.execute ("INSERT INTO asdTBL (lat, lng) VALUES (?, ?)", lat, lng);
	db.close();
	read();
};

exports.read = read;
exports.save = save;
