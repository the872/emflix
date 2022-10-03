it('should test home page', () => {
  cy.visit('/');
  cy.get('.align-center > .font-bold').should('have.text', 'emflix');
  cy.get('.pl-1 > button').should('have.class', 'btn');
});
