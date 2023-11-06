import { users } from "../../src/utils/users";

const [admin, john, jane] = users

describe("ilustrografia", () => {

  it("Login can be opened", () => {
    cy.visit("/login");
    cy.contains("Login");
  });

  it("Admin user can login", () => {
    cy.login(admin);
    cy.visit("/profile");
    cy.get("input[name='email']").should("have.value", admin.email);
  });

  it("Regular user Jane can login", () => {
    cy.login(jane);
    cy.visit("/profile");
    cy.get("input[name='email']").should("have.value", jane.email);
  });
  it("Regular user John can login", () => {
    cy.login(john);
    cy.visit("/profile");
    cy.get("input[name='email']").should("have.value", john.email);
  });
  it("Admin user cannot login with wrong password", () => {
    cy.visit("/login");
    cy.get("input[name='email']").type(admin.email);
    cy.get("input[name='password']").type('654321');
    cy.get('button:contains("Login")').click();
    cy.findByRole('alert').should('contain', 'Invalid email or password')
  });
  it("User cannot login with wrong email", () => {
    cy.visit("/login");
    cy.get("input[name='email']").type('fake@email.com');
    cy.get("input[name='password']").type('123456');
    cy.get('button:contains("Login")').click();
    cy.findByRole('alert').should('contain', 'Invalid email or password')
  });
});
