import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('.error-button')
        this.pageTitle = Selector('.login-box')
    }

    async submitLogin(username, password){
        await t.typeText(this.usernameField, username )
        await t.typeText(this.passwordField, password )
        await t.click(this.loginButton)
    }
}

export default new LoginPage()