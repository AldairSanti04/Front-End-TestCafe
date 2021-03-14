import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CheckoutPage from '../pages/CheckoutPage'
import { CREDENTIALS } from '../data/Constants'
import { INFORMATION } from '../data/Constants'


fixture('Buying Testing')
    .page `https://www.saucedemo.com/inventory.html`
    .beforeEach(async t => { 
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Continue with missing mail information', async t => { 
    await ProductsPage.buyItems()

    await t.click(CheckoutPage.checkoutButton)

    await t.click(CheckoutPage.continueButton)
    
    await t.expect(CheckoutPage.errorMessage.exists).ok()
})

test('Fill user\'s information', async t => { 
    await ProductsPage.buyItems()
    
    await CheckoutPage.typeInfo(INFORMATION.USER_INFO.NAME, INFORMATION.USER_INFO.LASTNAME, INFORMATION.USER_INFO.POSTAL)
        
    
    await t.expect(CheckoutPage.pageTitle2.exists).ok()
})

test('Final Order Items', async t => { 
    await ProductsPage.buyItems()
    
    await CheckoutPage.typeInfo(INFORMATION.USER_INFO.NAME, INFORMATION.USER_INFO.LASTNAME, INFORMATION.USER_INFO.POSTAL)
    
    await t.expect(ProductsPage.item1.exists).ok()
    await t.expect(ProductsPage.item2.exists).ok()
    await t.expect(ProductsPage.item3.exists).ok()
})

test('Complete a Purchase', async t => { 
    await ProductsPage.buyItems()

    await CheckoutPage.typeInfo(INFORMATION.USER_INFO.NAME, INFORMATION.USER_INFO.LASTNAME, INFORMATION.USER_INFO.POSTAL)

    await t
        .click(CheckoutPage.finishButton)
    
    await t.expect(CheckoutPage.finishHeader.exists).ok()
})