//Importing the function defined in Portal_Login_Page file 
var login_page = require('../pages/Portal_All_Functions_Collections.js');

//Importing Locators defined in or.json file
//var OR = require('../json/OR.json');

//Defining the Describe Block Container for Test Case 
describe("Portal Login Functionality Test Case",function(){
	
// Go to Portal URL  
	it("Verify Login Functionality",function(){
	
		login_page.navigateToURL();
		
	});
	
// Verify Page Title Test Case	
	it("Verify Title",function(){
		
	var title = login_page.getPageTitle();
			
	  title.then(function(text){
				
         console.log(" ");
				
		 console.log(text);
		 
		expect(title).toBe("Software and Data Marketplace");
				
			});
			
	});
	
	// Sign In Functionality Test Case	
	it("Verify Sigin Functionality",function(){
		
	login_page.signin();
					
	});
	
});

