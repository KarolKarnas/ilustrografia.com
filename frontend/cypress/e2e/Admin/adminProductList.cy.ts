import { users } from "../../fixtures/users";

const [admin, john, jane] = users;

after(() => {
  cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
});

describe("Ilustrografia Product List Page", () => {
  beforeEach(() => {
    // Reset the testing state and login as an admin user
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    cy.loginNoSession(admin);
  });

  describe("Product List Page", () => {
    beforeEach(() => {
      // Visit the Admin Product List page before each test
      cy.visit("/admin/product-list");
    });
    it('Should contain a single h1 tag with the text "Product List"', () => {
      cy.get("h1").should("have.length", 1).should("contain", "Product List");
    });

    it("Should display 9 product tables", () => {
      cy.findAllByRole("table").should("have.length", 9);
    });
    it("Should successfully delete a product", () => {
      cy.visit("/admin/product-list");
      cy.findByTestId("basilisk-table").within(() => {
        cy.findByTestId("delete").click();
      });
      cy.findByRole("alert").should("contain.text", "deleted successfully");
      cy.findAllByRole("table").should("have.length", 8);
    });
    it("Should have the first table with 26 rows", () => {
      cy.visit("/admin/product-list");
      cy.findByTestId("basilisk-table").within(() => {
        cy.findAllByRole("row").should("have.length", 26);
      });
    });
    it("Should have each table with 26 rows", () => {
      cy.visit("/admin/product-list");
      cy.findAllByRole("table").each((table) => {
        cy.wrap(table).within(() => {
          cy.findAllByRole("row").should("have.length", 26);
        });
      });
    });
    it("Should have edit and delete buttons in each table", () => {
      cy.visit("/admin/product-list");
      cy.findAllByRole("table").each((table) => {
        cy.wrap(table).within(() => {
          cy.findAllByTestId("delete").should("exist");
          cy.findAllByTestId("edit").should("exist");
        });
      });
    });
  });
});
