import { protractor } from 'protractor/built/ptor';
import { browser, element, by } from "protractor";

describe('Login html tests om den virker', () => {
    it('1,0 = should test that e2e works)',() => {
        //arrange 
        browser.get('');
        browser.sleep(1500);

        //act
        element(by.id('login-page')).click();
        let h2 = element(by.css("h2")).getText();
        //assert 
        expect(h2).toEqual("login works!")  
        browser.sleep(2000); 
    });

    it('1,1 = it should Login to the user and open register page',() =>{
        //arrange 
        browser.get('');
        //act
        element(by.id('login-page')).click(); 
        browser.sleep(1500);
        element(by.id('email-input')).sendKeys("user@gmail.dk");
        element(by.id('password-input')).sendKeys('1234');
        browser.sleep(1500);
        element(by.id('login-botton')).click();
        browser.sleep(1500);
        element(by.id('register-user-page')).click();
        browser.sleep(1500);
        let h3 = element(by.css("h3")).getText();
        //assert
        expect(h3).toEqual("register-user works!")
        // expect(true).toBeTruthy();
    });

    it('1,2 = should test that Webshop page works)',() => {
        //arrange 
        browser.get('');
        //act
        element(by.id('view-products')).click();
        let h1 = element(by.css("h1")).getText();
        //assert
        expect(h1).toEqual("END TO END TEST")  
        browser.sleep(3000); 
        // expect(true).toBeTruthy();
    });
    it('1,3 = should test Islogin on landing page)',() => {
        //arrange 
        browser.get('');
        //act
        element(by.id('home-page')).click();
        let h3 = element(by.css("h3")).getText();
        //assert
        expect(h3).toEqual("false")  
        browser.sleep(3000); 
        // expect(true).toBeTruthy();
    });
});
