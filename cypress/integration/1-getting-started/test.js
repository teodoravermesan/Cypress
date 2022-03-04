describe('My First Test', function() 
 {
    it('Login wikipedia page', function() 
     {
     cy.visit('https://en.wikipedia.org/wiki/Main_Page')
     cy.get('[id^=pt-login]').click()
     cy.get('#wpName1').type('teovermesan')
     cy.get('#wpPassword1').type('Test123456789')
     cy.get('[id^=wpLoginAttempt]').click()
     cy.get('#pt-userpage').should('have.text','Teovermesan')
    })
  })