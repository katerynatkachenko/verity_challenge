import './commands'
import './routes'

before(() => {
   // Cypress commands you would like to run (once) at the start of each test run.
})

beforeEach(() => {
    //access duckduckgo
    cy.visit('')
})

