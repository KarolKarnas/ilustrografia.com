import { users } from "../fixtures/users";

const [admin, john, jane] = users;

after(() => {
  cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
});

describe("Ilustrografia User Order Process", () => {
  beforeEach(() => {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    cy.loginNoSession(admin);
  });

  describe("Product List Page", () => {
    beforeEach(() => {
      cy.visit("/admin/product-list");
    });
    it('Should contain 1 h1 tag with "Product List" text', () => {
      cy.get("h1").should("have.length", 1).should("contain", "Product List");
    });

    it("Should display 9 product tables", () => {
      cy.findAllByRole("table").should("have.length", 9);
    });
    it("Should delete product", () => {
      cy.visit("/admin/product-list");
      cy.findByTestId("basilisk-table").within(() => {
        cy.findByTestId("delete").click();
      });
      cy.findByRole("alert").should("contain.text", "deleted successfully");
      cy.findAllByRole("table").should("have.length", 8);
    });
    it("First table should contain 26 rows", () => {
      cy.visit("/admin/product-list");
      cy.findByTestId("basilisk-table").within(() => {
        cy.findAllByRole("row").should("have.length", 26);
      });
    });
    it("Each table should contain 26 rows", () => {
      cy.visit("/admin/product-list");
      cy.findAllByRole("table").each((table) => {
        cy.wrap(table).within(() => {
          cy.findAllByRole("row").should("have.length", 26);
        });
      });
    });
    it("Each table should contain edit/delete buttons", () => {
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
