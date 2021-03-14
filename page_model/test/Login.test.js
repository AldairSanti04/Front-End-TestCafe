import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login Testing')
    .page `https://www.saucedemo.com/`

test('Login with a valid user', async t => { 
    await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('Login with a invalid user', async t => { 
    await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Logout from product\'s page', async t => { 
    await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t
        .click(ProductsPage.menuButton)
        .click(ProductsPage.logoutButton)
    
    await t.expect(LoginPage.pageTitle.exists).ok()
})
