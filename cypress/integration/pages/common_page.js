class commonPage {
    static textIsVisible(selector, text) {
        cy.get(selector).contains(text).should('be.visible')
    }
    static textIsNotVisible(text) {
        cy.contains(text).should('not.be.visible')
    }
}
export default commonPage;