import { element, by, promise, protractor, browser, $ } from "protractor";

export class SuperCalc{

    firstInputField = element(by.model("first"));
    secondInputField = element(by.model("second"));
    operatorField = element(by.model("operator"));
    goButton = element(by.id("gobutton"));
    result = element(by.binding('latest'));

    getTitle = () => {
        return browser.getTitle();
    }

    isFirstInputFieldDisplayed = () => {
        return this.firstInputField.isDisplayed();
    };
    
    isSecondInputFieldDisplayed = () => {
        return this.secondInputField.isDisplayed();
    };

    isGoButtonDisplayed = () => {
        return this.goButton.isDisplayed();
    };

    isResultDisplayed = () => {
        return this.result.isDisplayed();
    };

    isoperatorFieldDisplayer = () => {
        return this.operatorField.isDisplayed();
    }

    sumNumbers = (firstNumber: number, secondNumber: number) => {
        this.firstInputField.sendKeys(firstNumber);
        this.secondInputField.sendKeys(secondNumber);
        this.goButton.click();
        var Ec = protractor.ExpectedConditions;
        browser.wait(Ec.not(Ec.presenceOf($(".ng-valid-parse"))));

    }

    getResult = () => {
        return this.result.getText();
    }

}