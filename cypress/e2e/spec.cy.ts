it('should test home page', () => {
  cy.visit('/');
  cy.get('.align-center > .font-bold').should('have.text', 'emflix');
  cy.get('.pr-2 > button').should('have.class', 'btn');
  cy.get('.justify-end > button').should('have.class', 'btn');
  cy.get('app-movie-card').children().should('have.class', 'carousel-item');
  cy.get(':nth-child(1) > .carousel-item > .relative > .absolute').contains('/10');
});
