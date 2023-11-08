import { users } from "../fixtures/users";

const [admin, john, jane] = users;

describe("Ilustrografia User Authentication", () => {
  before(() => {
    // Reset the database before all tests
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });
  it("Should open the login page", () => {
    cy.visit("/login");
    cy.contains("Login");
  });

  it("Should allow admin user to log in successfully", () => {
    cy.loginNoSession(admin);
    cy.visit("/profile");
    cy.get("input[name='email']").should("have.value", admin.email);
  });

  it("Should allow regular user Jane to log in successfully", () => {
    cy.loginNoSession(jane);
    cy.visit("/profile");
    cy.get("input[name='email']").should("have.value", jane.email);
  });
  it("Should allow regular user John to log in successfully", () => {
    cy.loginNoSession(john);
    cy.visit("/profile");
    cy.get("input[name='email']").should("have.value", john.email);
  });
  it("Should prevent admin user from logging in with an incorrect password", () => {
    cy.visit("/login");
    cy.get("input[name='email']").type(admin.email);
    cy.get("input[name='password']").type("654321");
    cy.get('button:contains("Login")').click();
    cy.findByRole("alert").should("contain", "Invalid email or password");
  });
  it("Should prevent users from logging in with an incorrect email", () => {
    cy.visit("/login");
    cy.get("input[name='email']").type("fake@email.com");
    cy.get("input[name='password']").type("123456");
    cy.get('button:contains("Login")').click();
    cy.findByRole("alert").should("contain", "Invalid email or password");
  });
});
