import { browser } from "protractor";
import { SuperCalc } from "../pages/SuperCalc";

describe("Landing page", function(){
    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("should contains title as Super Calculator", function(){
        const landingPage =  new SuperCalc(); 
        expect<any>(landingPage.getTitle()).toEqual("Super Calculator");
    })

    it("Should Contain fields to enter numbers, operator field and Go button", function(){
        const landingPage =  new SuperCalc(); 
        expect(landingPage.isFirstInputFieldDisplayed()).toBeTruthy;
        expect(landingPage.isSecondInputFieldDisplayed()).toBeTruthy;
        expect(landingPage.isoperatorFieldDisplayer()).toBeTruthy;
        expect(landingPage.isGoButtonDisplayed()).toBeTruthy;
        expect(landingPage.isGoButtonDisplayed()).toBeTruthy;
    })

})

