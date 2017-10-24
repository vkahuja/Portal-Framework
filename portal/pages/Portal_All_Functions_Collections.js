//Importing Locators defined in or.json file
var OR = require('../json/OR.json');
  
//Portal Login Main Function
var PortalAllFunctionscollections = function(){
	
//Navigate to URL Function	  
	this.navigateToURL = function(){
		
		browser.get(OR.testsiteurl);
		browser.sleep(3000);
	};
	
//Sign In Function	
	this.signin = function(){
		
		//Enter Email id
		element(by.id(OR.locators.loginpage.email)).sendKeys(OR.locators.testdata.emailid);
		browser.sleep(3000);
		
		//Enter Password
		element(by.id(OR.locators.loginpage.password)).sendKeys(OR.locators.testdata.pass);
		browser.sleep(3000);
		
		//Click on Sign in Button
		element(by.buttonText(OR.locators.loginpage.signinbutton)).click();
		browser.sleep(3000);
		
	//Page Object Model return reference to the Login functionality page
		//return require('./Login_Functionality.js');
	};
	
	
//Forgot Password Function	
	this.forgotpassword = function(){
		
	element(by.xpath(OR.locators.forgotpasswordpage.forgotpasswordlink)).click();
	browser.sleep(3000);
	
	element(by.model(OR.locators.forgotpasswordpage.emailid)).sendKeys(OR.locators.testdata.emailid);
	browser.sleep(3000);
	
	element(by.xpath(OR.locators.forgotpasswordpage.forgotpasswordbutton)).click();
	browser.sleep(3000);

	};

//Getting Current Page Title Function	
	this.getPageTitle = function()
	{
		
		return browser.getTitle();
		
		//Page Object Model return reference to the same page
		return this;
	};
	
//SignOutFunction	
	this.signOut = function()
	{
		
		element(by.xpath(OR.locators.logout.parentlogout_click)).click();
		browser.sleep(3000);
		
		element(by.xpath(OR.locators.logout.childlogout_click)).click();
		browser.sleep(3000);
	};
	
//Closing curly braces of Portal Login Function
};

//Creating the reference of a page
module.exports = new PortalAllFunctionscollections();