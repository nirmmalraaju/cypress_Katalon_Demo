class CartPage {

    lowestPriceIndex = -1;
    lowestPrice = Number.POSITIVE_INFINITY;

    elements = {
        cartItems: () => cy.get('td.product-thumbnail'),
        cartItemsPrice: () => cy.get('span.woocommerce-Price-amount.amount'),
        removeIcon: () => cy.get('a.remove')
    };

    hasTotalItemsOf(count) {
        this.elements.cartItems().should('have.length', count)
    }

    searchLowestItem() {
        this.elements.cartItemsPrice().each(($item, index) => {
            const itemPrice = parseFloat($item.text().replace('$', ''));
            if (itemPrice < this.lowestPrice) {
                this.lowestPrice =  itemPrice;
                this.lowestPriceIndex = index;
            }
        });
    }

    removeLowsetPriceItem() {
        this.elements.removeIcon().eq(this.lowestPriceIndex).scrollIntoView().click();
    }
    
}
export const cartPage = new CartPage();