// load the global Cypress types
/// <reference types="cypress" />
// import { join } from "path";

import "@testing-library/cypress/add-commands";

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
  cy.session(
    [email, password],
    () => {
      cy.visit("/login");
      cy.get("input[name='email']").type(email);
      cy.get("input[name='password']").type(password);
      cy.get('button:contains("Login")').click();
      cy.findByRole('alert').should('contain', 'Logged in successfully')
    },
    {
      cacheAcrossSpecs: true,
    },
  );
};


Cypress.Commands.add("login", ({ email, password }) => {
  return login({ email, password });
});

// const Commands = { login };

// export default Commands;
