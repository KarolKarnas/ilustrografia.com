// load the global Cypress types
/// <reference types="cypress" />
// import { join } from "path";

import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
      loginNoSession: typeof loginNoSession;
      logout: typeof logout
    }
  }
}

type Props = {
  email: string;
  password: string;
};

const login = ({ email, password }: Props) => {
  cy.session(
    [email, password],
    () => {
      cy.visit("/login");
      cy.get("input[name='email']").type(email);
      cy.get("input[name='password']").type(password);
      cy.get('button:contains("Login")').click();
      cy.findByRole("alert").should("contain", "Logged in successfully");
    },
    {
      cacheAcrossSpecs: true,
    },
  );
};
const loginNoSession = ({ email, password }: Props) => {
  cy.visit("/login");
  cy.get("input[name='email']").type(email);
  cy.get("input[name='password']").type(password);
  cy.get('button:contains("Login")').click();
  cy.findAllByRole("alert").should("contain", "Logged in successfully");
};

const logout = () => {
  cy.get('[data-testid="app-links-full"]')
  .find('[data-testid="logged-user"]')
  .click();
cy.findByRole("menuitem", { name: /logout/i }).click();
  cy.findAllByRole("alert").should("contain", "Logged out successfully");
};

Cypress.Commands.add("login", ({ email, password }) => {
  return login({ email, password });
});
Cypress.Commands.add("loginNoSession", ({ email, password }) => {
  return loginNoSession({ email, password });
});
Cypress.Commands.add("logout", () => {
  return logout();
});

// const Commands = { login };

// export default Commands;
