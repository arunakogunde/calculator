
var {After, Before} = require('@cucumber/cucumber');

// Synchronous
Before(function () {
  return this.driver.manage().window().maximize();
});

// Asynchronous Callback
//Before(function (testCase, callback) {
  //var world = this;
  //tmp.dir({unsafeCleanup: true}, function(error, dir) {
    //if (error) {
    //  callback(error);
   // } else {
    //  world.tmpDir = dir;
    //  callback();
   // }
 // });
//});

// Asynchronous Promise
After(function () {
  // Assuming this.driver is a selenium webdriver
    return this.driver.quit();
});

