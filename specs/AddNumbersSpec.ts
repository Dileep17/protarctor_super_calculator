import { browser, element, by, protractor, $ } from "protractor";

describe("Super Calculator", function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("Should be able to add two positive numbers", function(){
        element(by.model("first")).sendKeys(1);
        element(by.model("second")).sendKeys(1);
        element(by.id("gobutton")).click();
        var Ec = protractor.ExpectedConditions;
        browser.wait(Ec.not(Ec.presenceOf($(".ng-valid-parse"))));
        expect<any>(element(by.binding('latest')).getText()).toEqual('2');
    })
})