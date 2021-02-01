# StyleMail

Tired of dull, lifeless emails with boring text and attachments? StyleMail is a web app that allows you to pick from and customize stylized HTML and CSS email templates. Simply pick a style, fill out your text and adjust a few settings, then click a button to copy the template into your email client to continue editing. Whether you're looking to give a fun vibe for digital party invitations or a professional vibe for a business memo, spice up your emails with StyleMail!  

Important Links:  
Persona 1: https://github.com/SCCapstone/StyleMail/wiki/Persona-1:-Patti-Arnold  
Persona 2: https://github.com/SCCapstone/StyleMail/wiki/Persona-2:-Bethany-Powers  
Persona 3: https://github.com/SCCapstone/StyleMail/wiki/Persona-3:-Clark-Hess  
User Stories: https://github.com/SCCapstone/StyleMail/wiki/User-Stories  
Design Milestone: https://github.com/SCCapstone/StyleMail/wiki/Design-Milestone  
Requirements Milestone: https://github.com/SCCapstone/StyleMail/wiki/Requirements-Milestone  
Architecture Milestone: https://github.com/SCCapstone/StyleMail/wiki/Architecture-Milestone  

This readme.md file contains detailed instructions to install, compile, run, and test the StyleMail web application.  

## Style

We will be using the following style guidelines and tools for our project:  
Google HTML/CSS Style Guide: https://google.github.io/styleguide/htmlcssguide.html  
Google JavaScript Style Guide: https://google.github.io/styleguide/jsguide.html  
Prettify - Code Formatter VS Code Extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode  

## External Requirements

In order to build this project you first have to install:

* [Node.js](https://nodejs.org/en/)  
* [npm](https://www.npmjs.com/)  
* The application depends on multiple node modules to be installed  

You will also need:  
* A web browser such as Firefox, Chrome, or Edge (udated to the latest version)  
* A stable internet connection  
* The Microsoft Windows 10 Operating System was used for development of this application, but it is compatible with any OS as long as the OS supports a web browser.  

## Setup

After cloning the repo:  
Currently, there are no setup steps that must be taken before running the web application for the first time after cloning the repo.  

## Running

To run the app from a cloned repo:  
1.) cd into the stylemail folder that is in the root directory  
2.) use the 'npm start' command to run the React app in development mode  
3.) Open http://localhost:3000 to view the app in your internet browser  

# Deployment

The stand alone web pages are deployed using Github Pages.  
Home Page: https://stylemail.app  
Contact Page: https://stylemail.app/contact  
Help Page: https://stylemail.app/help  
Privacy Policy Page: https://stylemail.app/privacy  
Terms of Use Page: https://stylemail.app/terms  

The SPA web application is deployed on Firebase Hosting and can be found at https://run.stylemail.app (this is the entry point of the React application)  

# Testing 

## Testing Technology

Unit Test  
Mocha: https://mochajs.org/ - The tests check if an authenticated user is able to modify a document of their own in our database while also checking if they are able to modify a document of a different user.  

To run the tests, you must install Mocha. You can install Mocha globally by using the command: $ npm install --global mocha  

Behavioral Test  
WebDriverIO: https://webdriver.io/ - The test nagivates to the login page, uses test login credentials to login as if it were a user, and then verifies that it has been successfully directed to the template list page after logging in.  

To run the tests, you must install WebDriverIO. You can install the WebDriverIO CLI by using the command: $ npm i --save-dev @wdio/cli  
Google Chrome: https://www.google.com/chrome/browser-tools/ is required for this test to run properly!

## Running Tests

How to run unit test: cd to StyleMail/stylemail/test and run the command: npm test  

How to run behavioral test:
You must setup the configuration file for the test runner using the command: $ npx wdio config -y (in a new terminal window)
Then you must copy and paste the file StyleMail/stylemail/test/specs/TestLogin.js to the directory C:\Users\<USERNAME>\test\specs (created by the configuration file in the previous step)  
After copying and pasting the file, run the command: $ npx wdio wdio.conf.js (in a new terminal window)
The test will open a new Google Chrome window, run, and then exit the window upon completion.


## Test Locations 

Unit Tests can be found in StyleMail/stylemail/test/test.js  

Behavioral tests can be found in StyleMail/stylemail/test/specs/  


# Authors

Kevin Hagan: kmhagan@email.sc.edu  
Hagan Personal Log: https://github.com/SCCapstone/StyleMail/wiki/Kevin-Hagan-Personal-Log  

Olivia Monty: omonty@email.sc.edu  
Monty Personal Log: https://github.com/SCCapstone/StyleMail/wiki/Monty-Personal-Log  

Sierra Stewart: sierrais@email.sc.edu  
Stewart Personal Log: https://github.com/SCCapstone/StyleMail/wiki/Sierra-Stewart-Personal-Log  

Alec Farmer: jaf10@email.sc.edu  
Farmer Personal Log: https://github.com/SCCapstone/StyleMail/wiki/Farmer-Personal-Log  

Garrett Erven: gerven@email.sc.edu  
Erven Personal Log: https://github.com/SCCapstone/StyleMail/wiki/Garrett-Erven-Personal-Log  
