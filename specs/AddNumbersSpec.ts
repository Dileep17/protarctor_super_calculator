import { browser } from "protractor";
import { SuperCalc } from "../pages/SuperCalc";

describe("Super Calculator", function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("Should be able to add two positive numbers", function(){
        const landingPage =  new SuperCalc();
        landingPage.sumNumbers(1,2);
        expect<any>(landingPage.getResult()).toEqual('3');
    })

})