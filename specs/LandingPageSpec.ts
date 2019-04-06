import { browser, element, by } from "protractor";

describe("Landing page", function(){
    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("should contains title as Super Calculator", function(){
        expect<any>(browser.getTitle()).toEqual("Super Calculator");
    })

    it("Should Contain fields to enter numbers, operator field and Go button", function(){
        expect(element(by.model("first")).isDisplayed).toBeTruthy;
        expect(element(by.model("second")).isDisplayed).toBeTruthy;
        expect(element(by.model("operator")).isDisplayed).toBeTruthy;
        expect(element(by.id("gobutton")).isDisplayed).toBeTruthy;
    })

})

