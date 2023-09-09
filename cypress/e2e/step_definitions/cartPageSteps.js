import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {cartPage} from '@pages/CartPage'

Then("I find total four items listed in my cart", () => {
    cartPage.hasTotalItemsOf(4);
})

When("I search for lowest price item", () => {
    cartPage.searchLowestItem();
})

Then("I am able to remove the lowset price item from my cart", () => {
    cartPage.removeLowsetPriceItem();
})

Then("I am able to verify three items in my cart", () => {
    cartPage.hasTotalItemsOf(3);
})