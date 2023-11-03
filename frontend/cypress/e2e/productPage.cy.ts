import { products } from "../../src/utils/products";

describe("ProductPage", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });

  products.forEach((product) => {
    it(`${product.name} ProductPage can be opened`, () => {
      cy.visit(`/shop/${product.slug}`);
      cy.findByRole("heading", { level: 1 }).should(
        "contain",
        `${product.name} Art Print 20x40`,
      );
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ email: "john@email.com", password: "123456" });
    });
    it("User can write a review", () => {
      const review = `Great 🎨!`;
      cy.visit("/shop/basilisk");
      cy.contains("Basilisk Art Print 20x40");
      cy.findByRole("textbox").type(review);
      cy.findByRole("button", { name: /add review/i }).click();
      cy.contains(review);
    });
  });
});
