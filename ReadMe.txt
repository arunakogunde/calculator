How to setup: 
Tools/software required:  jVisual Studio, Cucumber JS, selenium webdriver, Junit, browser drivers
Steps:
- Create Visual Studio project 
- Open terminal and enter the following commands:
npm -v - Check the version
node -v  - Check the version
npm init -y 
npm install cucumber --save-dev
npm install selenium-webdriver
npm install --save-dev cucumber-junit
Create features folder in which .features files are created
Create step-definition folder in which step-definitions are created
Create support folder in which hook.js and world.js files
Reports folder for generating reports

How to test:
Execute the command "./node_modules/.bin/cucumber-js features/frontend.feature" in the terminal.

Note:
node_modules folder is removed when uploading the files as the size was huge.
