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

    it('1,0 = it should create a new user', () =>{
      element(by.id('register-user-page')).click();
      browser.sleep(500);
      element(by.id('fn')).sendKeys('Hasan');
      browser.sleep(500);
      element(by.id('ln')).sendKeys('Hasansen');
      browser.sleep(500);
      element(by.id('mail')).sendKeys('user@gmail.dk');
      browser.sleep(500);
      element(by.id('passw')).sendKeys('1234');
      browser.sleep(1500);
      element(by.id('click')).click();

      let h2 = element(by.css('h2')).getText();

      expect(h2).toEqual('login works!');


    });

    it('1,1 = it should Login',() =>{
        //arrange
        //browser.get('');
        //act
        element(by.id('login-page')).click();
        browser.sleep(1500);
        element(by.id('email-input')).sendKeys("user@gmail.dk");
        element(by.id('password-input')).sendKeys('1234');
        browser.sleep(1500);
        element(by.id('login-botton')).click();

        let h3 = element(by.id("isLogin")).getText();
        expect(h3).toEqual('true');


    });

    it('1,2 = should test that we can open register user page',() =>{

      browser.sleep(1500);
      element(by.id('register-user-page')).click();
      browser.sleep(1500);
      let h3 = element(by.css("h3")).getText();
      //assert
      expect(h3).toEqual("register-user works!")
      // expect(true).toBeTruthy();

    });

    it('1,3 = should test that Webshop page works)',() => {
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
    it('1,4 = should test Islogin on landing page)',() => {
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

    it('1.5 = should login as admin', ()=> {

        element(by.id('login-page')).click();
        element(by.id('email-input')).sendKeys("admin@gmail.dk");
        element(by.id('password-input')).sendKeys('123');
        element(by.id('login-botton')).click();
        let p = element(by.id('adminP')).getText();

        expect(p).toEqual('admin-portal works!');

    })
    it('1,6 = should test if we can make a new product', ()=> {

        const before = 0;
        //count products before
        element(by.id('view-products')).click();
        element.all(by.css('.example-card')).then((prevElements) => {
            this.before = prevElements.length;
        });

        //login
        element(by.id('login-page')).click();
        element(by.id('email-input')).sendKeys("admin@gmail.dk");
        element(by.id('password-input')).sendKeys('123');
        element(by.id('login-botton')).click();

        //add-product
        element(by.id('add-product')).click();
        element(by.id('add-name')).sendKeys('Test Product');
        element(by.id('add-price')).sendKeys('1');
        element(by.id('add-weight')).sendKeys('1');
        element(by.id('add-animal')).sendKeys('1');
        element(by.id('add-btn')).click();
        


        //vi bliver automatisk redirected til viewproducts
        // vi skal tælle products, vi vil gerne ha 10
        element.all(by.css('.example-card')).then((ele) => {

          const after = ele.length;

          expect(after).toBe(this.before+1);


        });

    });




});
