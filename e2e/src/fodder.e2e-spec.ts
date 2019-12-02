

import { browser, element, by } from "protractor";

describe('Login html tests om den virker', () => {
    it('1,0 = should test that e2e works)',() => {
        //arrange 
        //act
        //assert
        browser.get('');
        element(by.id('login-page')).click();
        let h2 = element(by.css("h2")).getText();
        expect(h2).toEqual("login works!")  
        browser.sleep(1000); 
        expect(true).toBeTruthy();
    });

    it('1,1 = it should Login to the user and open register page',() =>{
        browser.get('');
        element(by.id('login-page')).click();
        let h2 = element(by.css("h2")).getText();
        expect(h2).toEqual("login works!")
        browser.sleep(1000);
        element(by.id('email-input')).sendKeys("user@gmail.dk");
        element(by.id('password-input')).sendKeys('12345');
        browser.sleep(1000);

        element(by.id('login-botton')).click();
        browser.sleep(1000);
        element(by.id('register-user-page')).click();
        browser.sleep(1000);
        expect(true).toBeTruthy();

    });
});
