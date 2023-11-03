// load the global Cypress types
/// <reference types="cypress" />
// import { join } from "path";

import '@testing-library/cypress/add-commands'

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}

type Props = {
  email: string;
  password: string;
};

const login = ({ email, password }: Props) => {
  cy.visit("/login");
  cy.get("input:eq(0)").type(email);
  cy.get("input:eq(1)").type(password);
  cy.get('button:contains("Login")').click();
  cy.contains('Reality Full of Magic')
};

Cypress.Commands.add("login", ({ email, password }) => {
  return login({ email, password });
});

// const Commands = { login };

// export default Commands;
