Feature: Borrowing Calculator 
 
Scenario: quick estimate on how much you may be able to borrow based on your current income and existing financial commitments.
Scenario Outline: Data Driven with excel and data sets
Given User opens home loan page "<url>"
When I input all the data with excel row"<row_index>" dataset
And I click on Work_out_how_much_I_could_borrow button
Then outputs the borrowing estimates to the user

Examples:
    | row_index  |
    | 1          |
    | 2          |
    | 3          |
    | 4          |

  Scenario:  start over button to clear all fields
  Given User has calculated borrowing estimates
  When User clicks on Start over button
  Then All the fields are cleared 