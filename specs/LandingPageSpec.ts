import { browser } from "protractor";

describe("Landing page", function(){
    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("should contains title as Super Calculator", function(){
        expect<any>(browser.getTitle()).toEqual("Super Calculator");
    })
})

