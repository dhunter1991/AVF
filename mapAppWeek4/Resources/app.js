// starts the main login in window
var win = Ti.UI.createWindow({
	title: "Location Map",
	backgroundColor: "#e8e5eb"
});
var image = Ti.UI.createImageView({
	image: "images/bg.jpg",
	width: "100%",
	height: "100%"
	});
var logout = Ti.UI.createButton({
	title: "logout"
});
// opens navigation window
if(Ti.platform.osname === "android"){
}else{
	var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win,
	rightNavButtons: logout
});
};
// username text feild 
var user = Ti.UI.createTextField({
	hintText: " dhunter1@fullsail.edu",
	top: 200,
	borderColor: "black",
	width: 250,
	height: 40,
	backgroundColor: "#fff"
});
// password text feild 
var password = Ti.UI.createTextField({
	hintText: " password",
	top: 250,
	borderColor: "black",
	width: 250,
	height: 40,
	passwordMask: true,
	backgroundColor: "#fff"
});
// register button
var create = Ti.UI.createButton({
	title: "not a member? Register",
	width: 200,
	height: 50,
	color: "#fff",
	top: password.top + 90,
});
// log in button
var signOn = Ti.UI.createButton({
	title: "log in",
	width: 250,
	height: 30,
	borderRadius: 5,
	backgroundColor: "green",
	top: password.top + 75
});
// opens navigation window and main window
if(Ti.osname === "iOS"){
win.add(image);
win.add(user);
win.add(password);
win.add(create);
win.add(signOn);
navWindow.open();
}else{
win.add(image);
win.add(user);
win.add(password);
win.add(create);
win.add(signOn);
win.open();
};
var loadfile1 = reuquire("geo");
var loadfile2 = require("signUp");
var start = require("geo");
start.geoFun();