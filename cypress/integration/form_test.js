describe('Test form inputs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });
  it('Input name into name input', () => {
    cy.get('#name').type('Kyle Lovell').should('have.value', 'Kyle Lovell');
    cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
    cy.contains('Place Order').click();
  });
});
