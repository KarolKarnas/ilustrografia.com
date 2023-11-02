describe("ilustrografia", () => {
  it("Login can be opened", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Login");
  });

  // it("User can login", () => {
  //   cy.visit("http://localhost:3000/login");
  //   cy.contains("Login");
  //   cy.get("input:eq(0)").type("admin@email.com");
  //   cy.get("input:eq(1)").type("123456");
  //   cy.get('button:contains("Login")').click();
  //   cy.contains("Reality Full of Magic");
  // });
  it("Admin user can login", () => {
    cy.login({email:'admin@email.com', password:'123456'});
    cy.contains("Reality Full of Magic");
  });

  it("Regular user can login", () => {
    cy.login({email:'jane@email.com', password:'123456'});
    cy.contains("Reality Full of Magic");
  });
});
