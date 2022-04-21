Cypress.Commands.add('login', (user, password) => {
  
  // Replace with your app's login page URL
  // or use cy.get('#my-account-button').click() command (or similar) to open a login modal
  cy.visit('/login')

  cy.get('input[name="username"]').type(user)
  cy.get('input[name="password"]').type(password)

  cy.get('form#login').submit()
})

Cypress.Commands.add('viewportPreset', (size = '') => {
  switch (size) {
    case 'samsung-s10-plus':
      cy.viewport(412, 869)
      break
    case 'iphone-se': 
      cy.viewport(375, 667)
      break
    case 'ipad-pro':
      cy.viewport(1366, 1024)
      break
    case 'ms-surface':
      cy.viewport(1280, 720)
      break
    case 'full-hd':
      cy.viewport(1920, 1080)
      break
    case 'imac':
      cy.viewport(2560, 1440)
      break
    default:
      cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'))
  }
})
