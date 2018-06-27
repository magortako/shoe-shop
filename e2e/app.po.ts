import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToLogin() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
