import { Selector, t } from 'testcafe'

class ProductsPage {
    constructor() {
        this.pageTitle = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn') 
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartButton = Selector('.shopping_cart_link.fa-layers.fa-fw')
        this.item1 = Selector('.inventory_item_name').withExactText('Sauce Labs Backpack')
        this.item2 = Selector('.inventory_item_name').withExactText('Sauce Labs Bolt T-Shirt')
        this.item3 = Selector('.inventory_item_name').withExactText('Sauce Labs Fleece Jacket')
        this.addSingle = Selector('.fa-layers-counter.shopping_cart_badge').withExactText('1')
        this.addMultiple = Selector('.fa-layers-counter.shopping_cart_badge').withExactText('3')
        this.additemButton = Selector('.btn_primary.btn_inventory')
        this.backButton = Selector('.inventory_details_back_button')
    }

    async buyItems() {
        await t.click(this.item1)
            .click(this.additemButton)
            .click(this.backButton)
            .click(this.item2)
            .click(this.additemButton)
            .click(this.backButton)
            .click(this.item3)
            .click(this.additemButton)
            .click(this.backButton)
            .click(this.cartButton)
    }
}

export default new ProductsPage()