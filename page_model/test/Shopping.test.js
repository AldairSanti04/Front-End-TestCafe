import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CheckoutPage from '../pages/CheckoutPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Shoping Testing')
    .page `https://www.saucedemo.com/inventory.html`
    .beforeEach(async t => { 
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Navigate to the shopping cart', async t => { 
    await t.click(ProductsPage.cartButton)
    
    await t.expect(CheckoutPage.pageTitle1.exists).ok()
})

test('Add a single item to the shopping cart', async t => {
    await t.click(ProductsPage.item1)
    await t.click(ProductsPage.additemButton)

    await t.expect(ProductsPage.addSingle.exists).ok()
})

test('Add multiple items to the shopping cart', async t => {
    await ProductsPage.buyItems()

    await t.expect(ProductsPage.addMultiple.exists).ok()
})