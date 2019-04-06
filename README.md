# protarctor_super_calculator
Learning protractor with typescript using super calculator. 


# To run the tests
npm test  


# known issues
1. As confugured in package.json posttest script, shutdown of webdriver will not kill the webdriver instance. This issue is fixed in webdriver-manager 13 but protractor is still refering to 12 (https://github.com/angular/webdriver-manager/issues/199)