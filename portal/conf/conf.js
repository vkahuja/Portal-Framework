exports.config = {
		directConnect: true,
		//seleniumSessionId:driver.getSession(),
	//seleniumAddress: 'http://localhost:4444/wd/hub',
		
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
      },
     // seleniumSessionId:browser.getSessionId,protractor.driver.getSession() 
      //directConnect: true,
 
     
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  onPrepare:function() {
	  
	 browser.ignoreSynchronization = true;
	  
	 browser.driver.manage().timeouts().implicitlyWait(60000); 
  },
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../test_specs/BankManagerLoginTest.js','../test_specs/AddCustomerInfoTest_spec.js'],
  specs: ['../testcase/Login_Functionality.js','../testcase/Forgot_Password_Functionality.js'],
 

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
    
   
}
};

