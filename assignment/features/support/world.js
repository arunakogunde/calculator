
const { setWorldConstructor, World } = require('@cucumber/cucumber')
const seleniumWebdriver = require('selenium-webdriver')
var {setDefaultTimeout} = require('@cucumber/cucumber');
const firefox = require('selenium-webdriver/firefox')
const chrome = require('selenium-webdriver/chrome')
class CustomWorld extends World {
    driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build()
       
    constructor(options) {
        super(options)
    }
    // Returns a promise that resolves to the element
   // async waitForElement(locator) {
    //    const condition = seleniumWebdriver.until.elementLocated(locator)
    //    return await this.driver.wait(condition)
  //  }
}
setDefaultTimeout(60 * 1000);
setWorldConstructor(CustomWorld)
