import { users } from "../../fixtures/users";

const [admin, john, jane] = users;

after(() => {
  cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
});

describe("Ilustrografia User List Page", () => {
  beforeEach(() => {
    // Reset the testing state and login as an admin user
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    cy.loginNoSession(admin);
    cy.visit("/admin/user-list");
  });

  describe("Should contain basic page elements", () => {
    it('Should contain a single h1 tag with the text "Update Product"', () => {
      cy.get("h1").should("have.length", 1).should("contain.text", "User List");
    });
    it("Should display 3 rows within tbody / have 3 users with default data", () => {
      cy.get("tbody").should("exist");
      cy.get("tbody").within(() => {
        cy.get("tr").should("have.length", 3);
      });
    });
    it("Should have 5 columns for each row", () => {
      cy.get("tbody").should("exist");
      cy.get("tbody").within(() => {
        cy.get("tr").each((row) => {
          cy.wrap(row).within(() => {
            cy.get("td").should("have.length", 5);
          });
        });
      });
    });

    it("Should have admin user as first ", () => {
      cy.get("tbody")
        .find("tr")
        .eq(0)
        .find("td")
        .eq(3)
        .find("svg")
        .should("have.css", "color", "rgb(74, 222, 128)");
    });
    it("Should remove user / have 2 users after deletion", () => {
      cy.get("tbody").as("tableBody").should("exist");
      cy.get("@tableBody").within(() => {
        cy.get("tr").eq(1).findByTestId("delete").click();
      });
      cy.findByRole("alert").should(
        "contain.text",
        "User deleted successfully",
      );
      cy.get("@tableBody").within(() => {
        cy.get("tr").should("have.length", 2);
      });
    });
  });
});
