describe("ilustrografia", () => {
  it("HomePage can be opened", () => {

    cy.visit("http://localhost:3000");
    cy.contains('Reality Full of Magic')
    cy.contains('Neo-Slavic Census')
  });
});
