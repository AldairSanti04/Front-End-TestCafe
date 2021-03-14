import { Selector, t } from 'testcafe'

class CheckoutPage {
    constructor() {
        this.pageTitle1 = Selector('.subheader')
        this.cartItem = Selector('.cart_item')
        this.cartButton = Selector('.shopping_cart_link.fa-layers.fa-fw')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector('.error-button')
        this.nameField = Selector('#first-name')
        this.lastField = Selector('#last-name')
        this.postalField = Selector('#postal-code')
        this.pageTitle2 = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('.btn_action.cart_button')
        this.finishHeader = Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER')
    }

    async typeInfo(name, lastname, postal) {
        await t.click(this.checkoutButton)
        await t.typeText(this.nameField, name )
        await t.typeText(this.lastField, lastname )
        await t.typeText(this.postalField, postal )
        await t.click(this.continueButton)
    }
}

export default new CheckoutPage()
