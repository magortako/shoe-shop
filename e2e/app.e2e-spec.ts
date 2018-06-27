import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('e-shop App Login', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
  });

  it('should be directed to login page', () => {
    page.navigateToLogin();

    expect(browser.getCurrentUrl()).toContain('/login');
    // TODO remove this
    browser.driver.sleep(2000);
  });

  it('should login as a student', () => {
    page.navigateToLogin();

    const emailInput = element(by.css('input[formControlName="email"]'));
    const passInput = element(by.css('input[formControlName="password"]'));

    emailInput.sendKeys('cristianpand@yahoo.com');
    passInput.sendKeys('123456');

    expect(emailInput.getAttribute('value')).toEqual('cristianpand@yahoo.com');
    expect(passInput.getAttribute('value')).toEqual('123456');

    // TODO remove this
    browser.driver.sleep(2000);

    element(by.id('btn1')).click();

    expect(browser.getCurrentUrl()).toContain('/');
    // TODO remove this
    browser.driver.sleep(2000);
  });
});
