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
if(Ti.osname === "iOS"){
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win,
	rightNavButtons: logout
});
}else{
}
// username text feild 
var user = Ti.UI.createTextField({
	hintText: " username",
	top: 200,
	borderColor: "black",
	width: 250,
	height: 30,
	backgroundColor: "#fff"
});
var userExample = Ti.UI.createLabel({
	text: "Example: dhunter1@fullsail.edu",
	top: user.top + user.height,
	font: {fontSize: 10, fontFamily: "arial", fontWeight: "regular"},
	left: 62
});
// password text feild 
var password = Ti.UI.createTextField({
	hintText: " password",
	top: 250,
	borderColor: "black",
	width: 250,
	height: 30,
	passwordMask: true,
	backgroundColor: "#fff"
});
// register button
var create = Ti.UI.createButton({
	title: "not a member? Register",
	width: 200,
	height: 50,
	top: password.top + 75,
});
// log in button
var signOn = Ti.UI.createButton({
	title: "log in",
	width: 250,
	height: 30,
	borderRadius: 5,
	backgroundColor: "green",
	top: password.top + 50
});
var loadfile2 = require("signUp");
// opens navigation window and main window
if(Ti.osname === "iOS"){
win.add(image, user, password, create, signOn, userExample);
navWindow.open();
}else{
	win.add(image);
win.add(password);
win.add(create);
win.add(signOn);
win.add(userExample);
win.open();
}

