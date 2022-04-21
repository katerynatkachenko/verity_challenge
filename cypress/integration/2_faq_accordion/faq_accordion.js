import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import commonPage from "../pages/common_page";

const answer_0 = 'For example, if you search for cars, we’ll show you ads about cars.'
const answer_1 = 'Not only does Google keep your search history'
const answer_2 = 'By contrast, our private search engine'
const answer_3 = 'DuckDuckGo, you escape the filter bubble of manipulated results.'
const answer_4 = 'This does not mean our search results are generally “unfiltered” because,'
const answer_5 = 'We have been an independent company since our founding in 2008 and'
const answer_6 = 'It is a myth that you can’t be tracked while using so-called “Incognito” mode.'
const answer_7 = 'Our best guess — over 50 million people!'
const answer_8 = 'This gives you all the key privacy protection tools to search and browse privately'


Given('I scroll into FAQ questions and check the first one', () => {
    cy.contains('Frequently Asked Questions').scrollIntoView().should('be.visible')
    commonPage.textIsVisible('.faq__question', 'How does DuckDuckGo make money?')
    commonPage.textIsVisible('#faq-answer-0', answer_0)
});

When('I unfold each of the FAQ questions and check text compatibility', () => {
    cy.get('#faq-btn-1').click()
    commonPage.textIsVisible('.faq__question', 'What does Google know about me?')
    commonPage.textIsVisible('#faq-answer-1', answer_1)

    cy.get('#faq-btn-2').click()
    commonPage.textIsVisible('.faq__question', 'Why use DuckDuckGo instead of Google?')
    commonPage.textIsVisible('#faq-answer-2', answer_2)

    cy.get('#faq-btn-3').click()
    commonPage.textIsVisible('.faq__question', 'How do DuckDuckGo search results compare to Google’s?')
    commonPage.textIsVisible('#faq-answer-3', answer_3)

    cy.get('#faq-btn-4').click()
    commonPage.textIsVisible('.faq__question', 'Is DuckDuckGo an “unfiltered” search engine?')
    commonPage.textIsVisible('#faq-answer-4', answer_4)

    cy.get('#faq-btn-5').click()
    commonPage.textIsVisible('.faq__question', 'Is DuckDuckGo owned by Google?')
    commonPage.textIsVisible('#faq-answer-5', answer_5)

    cy.get('#faq-btn-6').click()
    commonPage.textIsVisible('.faq__question', 'What’s the difference between using DuckDuckGo and Incognito mode?')
    commonPage.textIsVisible('#faq-answer-6', answer_6)

    cy.get('#faq-btn-7').click()
    commonPage.textIsVisible('.faq__question', 'How popular is DuckDuckGo?')
    commonPage.textIsVisible('#faq-answer-7', answer_7)

    cy.get('#faq-btn-8').click()
    commonPage.textIsVisible('.faq__question', 'How does the DuckDuckGo app & extension work?')
    commonPage.textIsVisible('#faq-answer-8', answer_8)
});

Then('I verify if the text from closed answers is no longer displayed', () => {
    commonPage.textIsNotVisible(answer_0)
    commonPage.textIsNotVisible(answer_1)
    commonPage.textIsNotVisible(answer_2)
    commonPage.textIsNotVisible(answer_3)
    commonPage.textIsNotVisible(answer_4)
    commonPage.textIsNotVisible(answer_5)
    commonPage.textIsNotVisible(answer_6)
    commonPage.textIsNotVisible(answer_7)
    cy.contains('Add DuckDuckGo to Firefox').should('be.visible')
});




