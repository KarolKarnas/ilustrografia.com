describe("ilustrografia", () => {
  it("HomePage can be opened", () => {
    cy.visit("http://localhost:3000/contact");
    cy.contains("Do you have a question?");
    
    cy.viewport(1920, 1080)
    cy.get('#login').click()
  });
});
