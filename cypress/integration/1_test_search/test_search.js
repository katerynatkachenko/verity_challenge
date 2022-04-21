import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import commonPage from "../pages/common_page";

Given('I type input in browser search field and press Search', () => {
    cy.get('#search_form_input_homepage').click().type('verity drones');
    cy.get('#search_button_homepage').click();
});

When('I change the region to Switzerland', () => {
    cy.get('.dropdown--region').contains('Germany').click();
    commonPage.textIsVisible('.modal__list__link', 'Austria')
    cy.contains('Switzerland (de)').scrollIntoView().should('be.visible').click({force: true});
});

Then('I verify the search result and header tabs', () => {
    commonPage.textIsVisible('.result__url__domain', 'https://verity.net');
    commonPage.textIsVisible('.result', 'Self-Flying Drones Deliver Your Zero-Error Warehouse - Verity');
    commonPage.textIsVisible('.zcm', 'All')
    commonPage.textIsVisible('.zcm', 'Images')
    commonPage.textIsVisible('.zcm', 'Videos')
    commonPage.textIsVisible('.zcm', 'News')
    commonPage.textIsVisible('.zcm', 'Maps')
});

