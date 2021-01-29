const { BrowserRouter } = require("react-router-dom")

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://stylemail.app/')
        expect(browser).toHaveTitle('StyleMail');
    })
})