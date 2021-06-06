import TestCaseHookDefinition from '@cucumber/cucumber/lib/models/test_case_hook_definition';
import { urlContains } from 'selenium-webdriver/lib/until';
import helper from './helper';
const helper = require("./helper");

const { setWorldConstructor, World } = require('@cucumber/cucumber')
const {By,Key,Builder} = require("selenium-webdriver");
const {Given,When,Then} = require('@cucumber/cucumber')
const assert = require('cucumber-assert');

  
Given('User opens home loan page {string}', function (string) {
         //load the home loan page  
       helper.loadPage(base-url);
      
         //Verify the page title and print it
       helper.getTitle();
       assert.equal(this.title,base_title, 'Expected title to be ' + base_title);
        });

When('I input all the data with excel row\"([^\"]*)\" dataset$"', function (rownum) {
     

       var Single=driver.findElement(By.id("application_type_single")).click();
       var dependant=driver.findElement(By.id("q1q2"));
       var propertytype=driver.findElement(By.id("borrow_type_home")).click;
       var income =driver.findElement(By.id("q2q1"));
       var other_income=driver.findElement(By.id("q2q2i1"));
       var expenses=driver.findElement(By.id("expenses"));
       var current_repay=driver.findElement(By.id("homeloans"));
       var other_repay=driver.findElement(By.id("otherloans"));
       var other_commit=driver.findElement(By.id("q3q4i1"));
       var total_credit=driver.findElement(By.id("credit"));
       
       mgr.readExcel(rownum);
       var cellcount=sheet.getRow(rownum).getLastCellNum();
       for(var i=1;i<=cellcount;i++) {
          //Enter the values read from Excel 
          income.sendKeys(sheet.getRow(i).getCell(0).getStringCellValue());
          other_income.sendKeys(sheet.getRow(i).getCell(1).getStringCellValue());
          expense.sendKeys(sheet.getRow(i).getCell(2).getStringCellValue());
          current_repay.sendKeys(sheet.getRow(i).getCell(3).getStringCellValue());
          other_repay.sendKeys(sheet.getRow(i).getCell(4).getStringCellValue());
          other_commit.sendKeys(sheet.getRow(i).getCell(5).getStringCellValue());
          total_credit.sendKeys(sheet.getRow(i).getCell(6).getStringCellValue());
       }
  });

When('I click on Work_out_how_much_I_could_borrow', function () {

     driver.findElement(By.id("btnBorrowCalculator")).click();
     
      
});

Then('outputs the borrowing estimates to the user', function () {
     driver.findElements(By.xpath("//*[contains(text(),'We estimate you could borrow:')]"));
     var estimate_amount = driver.findElements(By.id("//*[@id="borrowResultTextAmount"]"));
      assert.equal(helper.loanEstimator(),estimate_amount, 'Expected amount to be ' + helper.loanEstimator());
});
  
Given('User has calculated borrowing estimates', function () {


});

When('User clicks on Start over button', function () {
          driver.findElements(By.CSSselector(".borrow__result > div:nth-child(2) > button:nth-child(1)"));
          helper.verifyFields();

});


Then('All the fields are cleared ', function () {
     });


