const { BrowserRouter } = require("react-router-dom")

describe('webdriver.io page', () => {
    it('Should Login', () => {
        browser.url('https://stylemail.app')
        
        browser.pause(2000);   
        const link = $('=Login');
        link.click();

             
        const userName = $('//*[@id="email"]/input');
        userName.setValue('johndoe@gmail.com');
        browser.pause(2000);      

        const password = $('//*[@id="password"]/input');
        password.setValue('testPass');
        
        const buttons = $('//*[@id="root"]/div/div/div[1]/div/form/button');
        buttons.click();
        
        browser.pause(3000);      

        const menuScreen = $('//*[@id="root"]/div/div/div[1]/div/h2');        
        isExisting = menuScreen.isExisting()
        console.log(isExisting); 




    })
})