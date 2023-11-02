describe("ilustrografia", () => {
  it("HomePage can be opened", () => {
    cy.visit('');
    cy.contains("Reality Full of Magic");
    cy.contains("Neo-Slavic Census");
  });
});
