// register page of the application
var signUp = function (){
	var signUpWin = Ti.UI.createWindow({
		title: "sign up",
		backgroundColor: "#e8e5eb"
	});
	var image = Ti.UI.createImageView({
	image: "images/bg.jpg",
	width: "100%",
	height: "100%"
	});
	var newUser = Ti.UI.createTextField({
		hintText: " dhunter1@fullsail.edu",
		top: 100,
		borderColor: "black",
		width: 320,
		height: 30,
		backgroundColor: "#fff"
	});
	var newPassword = Ti.UI.createTextField({
		hintText: " password",
		top: newUser.top + 75,
		borderColor: "black",
		width: 320,
		height: 30,
		passwordMask: true,
		backgroundColor: "#fff"
	});
	var confirm = Ti.UI.createTextField({
		hintText: " confirm password",
		top: newPassword.top + 75,
		borderColor: "black",
		width: 320,
		height: 30,
		passwordMask: true,
		backgroundColor: "#fff"
	});
	var cancel = Ti.UI.createButton({
		title: "cancel",
		right: 20,
		width: 150,
		height: 30,
		bottom: 50,
		borderRadius: 5,
		backgroundColor: "red"
	});
	var confirmButton = Ti.UI.createButton({
		title: "Register",
		left: 20,
		width: 150,
		height: 30,
		bottom: 50,
		borderRadius: 5,
		BackgroundColor: "green"
	});
	if(Ti.osname === "iOS"){
	signUpWin.add(newUser, newPassword, confirm, cancel, confirmButton, userExample2);
	navWindow.openWindow(signUpWin);
	}else{
		signUpWin.add(image);
		signUpWin.add(newUser);
		signUpWin.add(newPassword);
		signUpWin.add(confirm);
		signUpWin.add(cancel);
		signUpWin.add(confirmButton);
		signUpWin.add(userExample2);
		signUpWin.open();
	};
	exports.signUp = signUp;
// this function runs a control to inform user that account has been created and sends them back to the log in page
	var confirmWin = function(){
		var confirmWindow = Ti.UI.createWindow({
			backgroundColor: "#fff",
			exitOnClose: true,
			fullScreen: false,
		});
		var dialog = Ti.UI.createAlertDialog({
			message: "your account has been created!\n you can now sign in to view news updates.\n username: "+ newUser.value,
			ok: "confirm",
			title: "account created"
		});
		dialog.show();
		signUpWin.close();
	};
	exports.confirmWin = confirmWin;
		confirmButton.addEventListener("click", confirmWin);
// this is an escape hatch if someone does not want to create an account and can go back to the log in page
		var closeWindow = function(){
		signUpWin.close();
	};
	cancel.addEventListener("click", closeWindow);
	exports.closeWindow = closeWindow;
};
// logout window that opens when logout is clicked
var logoutbutton = function(){
	var logoutWin = Ti.UI.createWindow({
		backgroundColor: "#fff",
		exitOnClose: true,
		fullScreen: false
	});
	var dialog2 = Ti.UI.createAlertDialog({
		cancel: 1,
		buttonNames: ["continue", "cancel"],
		message: "you have been logged out!",
		ok: "continue",
		title: "logout"
	});
	dialog2.show();
	navWindow.close();
	win.open();
	navWindow.open();
};
exports.logoutbutton = logoutbutton;
logout.addEventListener("click", logoutbutton);
create.addEventListener("click", signUp);