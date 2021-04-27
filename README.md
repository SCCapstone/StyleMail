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
Selinium: https://www.selenium.dev/ 
See below for details on how to run the tests. 


## Running Tests

How to run unit test:
* cd to StyleMail/stylemail/test and run the command "npm install" (to install dependencies required for the tests)
* After the dependencies finish installing, run the command "npm test" (to run the unit tests)  

How to run behavioral test:  
1. Ensure you have the latest Java SDK: https://www.oracle.com/java/technologies/javase-jdk16-downloads.html
2. Ensure you have the latest version of google chrome: https://www.google.com/chrome/update/
3. Ensure you have the latest version of the google chrome web driver: https://chromedriver.chromium.org/downloads
4. After this, simply double click on the jar files located in StyleMail/stylemail/test/BehaviorTests/ or run "java -jar **filename.jar** " in the respective directory
5. Selinium will then open the respective test in a new chrome window 


## Test Locations 

Unit Tests can be found in StyleMail/stylemail/test/test.js  

Behavioral tests (runable Jar files) can be found in StyleMail/stylemail/test/BehaviorTests/ 
Behavioral tests src files can be found in StyleMail/stylemail/test/BehaviorTestFiles


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
