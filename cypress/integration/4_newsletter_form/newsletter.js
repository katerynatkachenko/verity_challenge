import {Given, Then} from "cypress-cucumber-preprocessor/steps";

Given('I type an email to subscribe to the newsletter', () => {
    cy.visit('/about')
    cy.get('.js-form-newsletter').find('input[type=email]').type('test@test.de')
    cy.get('input[type=submit]').contains('Sign Up').click()
});

Then('Check if the pathname is equal to the redirected page value', () => {
    cy.location('pathname').should('equal', '/newsletter/subscription/subscribe')
    cy.get('.bodyContent').contains('Thank you!').should('be.visible')
});

