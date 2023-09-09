class HomePage {

    elements = {
        itemThumbnails: () => cy.get('.ellie-thumb-wrapper')
    };

    addRandomItemsToCart(numberOfItems) {
        this.elements.itemThumbnails() // Get all items on screen
            .should('have.length.gt', numberOfItems) // Ensure there are at least given number of items to add to cart
            .then(($items) => {
                const totalItemElements = $items.length;
                const randomIndices = [];

                // Generate 4 unique random indices
                while (randomIndices.length < numberOfItems) {
                    const randomIndex = Math.floor(Math.random() * totalItemElements);
                    if (!randomIndices.includes(randomIndex)) {
                        randomIndices.push(randomIndex);
                    }
                }
                randomIndices.sort((a, b) => a - b);

                // Select and interact with the 4 random items 
                cy.scrollTo('top');
                randomIndices.forEach((index) => {
                    cy.wrap($items[index]) // add item to cart
                        .scrollIntoView({top: -15, left: 0})
                        .wait(1000)
                        .invoke('show')
                        .trigger('mouseover')
                        .wait(1000)
                        .find('a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart')
                        .scrollIntoView()
                        .click();
                    cy.wrap($items[index]) // ensure item is added to cart
                        .find('a.added_to_cart')
                        .scrollIntoView()
                        .should('exist', { timeout: 15000 });
                });
            });
    }

    addFirstNitems(numberOfItems) {
        this.elements.itemThumbnails() // Get all items on screen
            .should('have.length.gt', numberOfItems) // Ensure there are at least given number of items to add to cart
            .then(($items) => {
                const totalItemElements = $items.length;
                const randomIndices = [0, 1, 2, 3];

                // Select and interact with the 4 random items 
                randomIndices.forEach((index) => {
                    // cy.scrollTo('top');
                    cy.wrap($items[index]) // add item to cart
                        .scrollIntoView()
                        .invoke('show')
                        .find('a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart')
                        .click();
                    cy.wrap($items[index]) // ensure item is added to cart
                        .find('a.added_to_cart')
                        .scrollIntoView()
                        .should('exist', { timeout: 15000 });
                });
            });
    }

    gotToCart() {
        cy.get('.page-item-8 > a').click(); // go to cart
    }

}

export const homePage = new HomePage();
