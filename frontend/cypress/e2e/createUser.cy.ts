import { users } from "../fixtures/users";

const [admin, john, jane] = users;

describe("Create new user", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });

  it("There are 3 users with test data", () => {
    cy.loginNoSession(admin);
    cy.visit("/admin/user-list");
    cy.get("tbody").find("tr").should("have.length", 3);
  });

  it.only("Create user", () => {
    const newUser = {
      name: "New",
      email: "new@email.com",
      password: "123456",
    };
    //create user
    cy.visit("/register");
    cy.findByRole("textbox", { name: /name/i }).type(newUser.name);
    // cy.get("input[name='name']").type('New');
    cy.findByRole("textbox", { name: /email/i }).type(newUser.email);
    // cy.get("input[name='email']").type('new@email.com');
    cy.get("input[name='password']").type(newUser.password);
    cy.get("input[name='confirmPassword']").type(newUser.password);
    cy.findByRole("button", { name: /register/i }).click();
    cy.findByRole("alert").should(
      "contain",
      `Welcome to Team Ilustrografia ${newUser.name}!`,
    );
    //logout
    cy.logout();
    //check number of users as admin
    cy.loginNoSession(admin);
    cy.visit("/admin/user-list");
    cy.get("tbody").find("tr").should("have.length", 4);
  });
});
