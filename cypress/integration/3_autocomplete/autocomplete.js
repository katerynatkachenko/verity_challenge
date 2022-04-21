import {Given, Then} from "cypress-cucumber-preprocessor/steps";

Given('I type input in the search field', () => {
    cy.get('#search_form_input_homepage').type('zurich')
})
Then('Check if each output result contains word zurich', () => {
    cy.get('.t-normal').each((element) => {
        cy.get(element).should('contain.text', 'zurich')
    });
});
