import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from '@pages/HomePage'

beforeEach(() => {
    // Set the viewport size to Full HD (1920x1080) before each test
    cy.viewport(1920, 1080);
});

Given("I add first four items to my cart", () => {
    cy.visit('https://cms.demo.katalon.com/')
    homePage.addFirstNitems(4);
    homePage.gotToCart();
});

Given("I add four random items to my cart", () => {
    cy.visit('https://cms.demo.katalon.com/')
    homePage.addRandomItemsToCart(4);
    homePage.gotToCart();
});

When("I view my cart", () => {
    homePage.gotToCart();
})
