import { users } from "../../fixtures/users";

const [admin, john, jane] = users;

after(() => {
  cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
});

describe("Ilustrografia Edit Product Page", () => {
  beforeEach(() => {
    // Reset the testing state and login as an admin user
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    cy.loginNoSession(admin);
    // Visit the Product Edit page before each test
    cy.visit("/admin/product-list/shopping-baba/edit");
  });

  describe("Should contain basic page elements", () => {
    it('Should contain a single h1 tag with the text "Update Product"', () => {
      cy.get("h1").should("have.length", 1).should("contain", "Update Product");
    });
    it("General Product Edit Page Elements", () => {
      cy.findAllByRole("textbox").should("have.length", 37);
      cy.findAllByRole("textbox", { name: /name/i }).should("have.length", 2);

      cy.get('input[name="ytLink"]').should("exist");
      cy.get('input[name="name"]').should("exist");
      //Alternative with cypress-testing-library
      // cy.findByRole("textbox", { name: "Latin Name" }).should("exist");
      // cy.findByRole("textbox", { name: "Name" }).should("exist");
    });
  });
  describe("Updating Correct Product Elements", () => {
    it("Should change the product name", () => {
      const newName = "Lichodla";
      //change name
      cy.get('input[name="name"]').as("nameInput").clear();
      cy.get("@nameInput").type(newName);
      cy.get('button:contains("Save Changes")').click();
      cy.findByRole("alert").should(
        "contain.text",
        `The ${newName} product updated successfully`,
      );

      //Verify changes on the and ProductPage
      cy.visit(`/shop/${newName.toLowerCase()}`);
      cy.contains(`${newName} Art Print 20x40`);
      cy.contains("Shopping Baba Art Print 20x40").should("not.exist");
      // cy.findByRole("button", { name: /add to cart/i }).click();
      // cy.contains("button", /add to cart/i).click();

      //Verify changes on the and IllustrationPage
      cy.visit(`/illustrations/${newName.toLowerCase()}`);
      cy.get("h1").should("have.length", 1).should("contain", `${newName}`);
    });
    it("Should not change the product name with the duplicated name", () => {
      const newName = "Forest Bobo";

      // Attempt to change the name to an existing one
      cy.get('input[name="name"]').as("nameInput").clear();
      cy.get("@nameInput").type(newName);
      cy.get('button:contains("Save Changes")').click();

      // Verify alert for name duplication
      cy.findByRole("alert")
        .should("exist")
        .should(
          "contain.text",
          `Product with the name ${newName} already exists, provide unique name`,
        );
    });
    it("Should update shopping-baba-art-print-s20x40 price to 2222", () => {
      const newPrice = "2222";

     // Change the price
      cy.get('input[name="price"]').eq(0).as("priceInput").type("{selectall}");
      cy.get("@priceInput").type(newPrice);
      cy.get('button:contains("Save Changes")').click();

        // Verify successful product update alert
      cy.findByRole("alert").should(
        "contain.text",
        `product updated successfully`,
      );

      // Verify price change on the Product Page
      cy.visit(`/shop/shopping-baba?material=art-print&size=s20x40`);
      cy.contains(`$${newPrice}`).should("exist");
    });
  });
});
