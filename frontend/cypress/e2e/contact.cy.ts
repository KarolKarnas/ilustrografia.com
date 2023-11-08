describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("Should open the ContactPage", () => {
    cy.contains("Do you have a question?");
  });
  it("Should contain a valid email link", () => {
    cy.get('a:contains("ilustrografia@gmail.com")').should(
      "have.attr",
      "href",
      "mailto:ilustrografia@gmail.com",
    );
  });
});
