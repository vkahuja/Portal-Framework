//Importing the function defined in Portal_Login_Page file 
var login_page = require('../pages/Portal_All_Functions_Collections.js');

//Defining the Describe Block Container for Test Case 
describe("Forgot Password Functionality",function(){
	
	
	//Go to Portal URL  
	it("Sign Out Functionality",function(){
	
		login_page.signOut();
		//browser.quit();
		
		
	});
	
	//Go to Portal URL  
	it("Verify Login Functionality",function(){
		browser.restart();
		//Calling Navigate to URL Function
		login_page.navigateToURL();
		
	});
	
//Click on Forgot Password 
	it("Forgot Password Functionality Test Case",function(){
	
		login_page.forgotpassword();
		
	});
	
	
});

