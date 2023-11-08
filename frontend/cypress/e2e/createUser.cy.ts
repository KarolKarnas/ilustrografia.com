import { users } from "../fixtures/users";

const [admin, john, jane] = users;

after(() => {
  cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  // cy.visit("");
});

describe("User Registration", () => {
  beforeEach(() => {
    // Reset the backend data before each test
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });

  it("Should have 3 users with test data", () => {
    // Log in as an admin, visit the user list page, and check for 3 users
    cy.loginNoSession(admin);
    cy.visit("/admin/user-list");
    cy.get("tbody").find("tr").should("have.length", 3);
  });

  it("Should have 4 users after creating a new user", () => {
    const newUser = {
      name: "New",
      email: "new@email.com",
      password: "123456",
    };

    // Create a new user and verify the count increases to 4
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

    // Log out, log in as admin, and check for 4 users
    cy.logout();
    cy.loginNoSession(admin);
    cy.visit("/admin/user-list");
    cy.get("tbody").find("tr").should("have.length", 4);
  });

  it("Should prevent user creation with an existing email", () => {
    const newUser = {
      name: "New",
      email: admin.email,
      password: "123456",
    };

    // Attempt to create a user with an existing email and verify the error message
    cy.visit("/register");
    cy.findByRole("textbox", { name: /name/i }).type(newUser.name);
    cy.findByRole("textbox", { name: /email/i }).type(newUser.email);
    cy.get("input[name='password']").type(newUser.password);
    cy.get("input[name='confirmPassword']").type(newUser.password);
    cy.findByRole("button", { name: /register/i }).click();
    cy.findByRole("alert").should("contain", `User already exists`);
  });

  it("Should prevent user creation with empty spaces", () => {
    const newUser = {
      name: "   ",
      email: "   ",
      password: "   ",
    };

    // Attempt to create a user with empty spaces and verify the error messages
    cy.visit("/register");
    cy.findByRole("textbox", { name: /name/i }).type(newUser.name);
    cy.findByRole("textbox", { name: /email/i }).type(newUser.email);
    cy.get("input[name='password']").type(newUser.password);
    cy.get("input[name='confirmPassword']").type(newUser.password);
    cy.findByRole("button", { name: /register/i }).click();
    cy.get(".form-message").should("have.length", 4);
    cy.get(".form-message").each((message) => {
      cy.wrap(message).should("have.css", "color", "rgb(234, 96, 82)");
    });
    cy.contains("Just empty spaces here...");
    cy.contains("Please enter your Email");
  });
});
