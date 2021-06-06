
const { setWorldConstructor, World } = require('@cucumber/cucumber');
const {By,Key,Builder} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const config = require("./config");

class helper extends config{
    constructor(options) {
        }

        //load the page
 loadPage()
  {
    this.driver.get(base_url);
  }

  getTitle()
{//Verify the page title and print it
    var title =  driver.getTitle();
    console.log('Title is:',title);

}

 loanEstimator(){
    //loan estimate logic goes here
    
}

verifyFields(){
    //verify each field is updated the value with 0 
}
readExcel(rownum) {

    try{
    var excelObject = new ActiveXObject("Excel.Application");
    excel.visible=false;
    var workbook = excel.Workbooks.Open("TestDataPath");
    var excelsheet = excel.Worksheets("Sheet1");
    //get all rows in the sheet
    var rowCount=sheet.getLastRowNum()-sheet.getFirstRowNum();
}
catch (err) {
    // statements to handle any exceptions
    logMyErrors(err);    // pass exception object to error handler
  }
  finally{
    workbook.Close();
    excel.Application.Quit();
  }
}

module.exports = helper;
