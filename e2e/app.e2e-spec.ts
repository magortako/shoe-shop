import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('e-shop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

   it('should be directed to login page', () => {
    page.navigateTo('/');
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should login as a student', () => {

    const emailInput = element(by.css('input[formControlName="email"]'));
    const passInput = element(by.css('input[formControlName="password"]'));

    emailInput.sendKeys('cristianpand@yahoo.com');
    passInput.sendKeys('pass123');

    expect(emailInput.getAttribute('value')).toEqual('student.one@stud.kea.dk');
    expect(passInput.getAttribute('value')).toEqual('pass123');


    element(by.tagName('button')).click();

  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
