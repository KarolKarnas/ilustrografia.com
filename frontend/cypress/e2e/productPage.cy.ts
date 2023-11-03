import { products } from "../../src/utils/products";

describe("ProductPage", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });

  products.forEach((product) => {
    it(`${product.name} ProductPage can be opened`, () => {
      cy.visit(`/shop/${product.slug}`);
      cy.contains(`${product.name} Art Print 20x40`);
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ email: "john@email.com", password: "123456" });
    });
    it("User can write a review", () => {
      const review = `Great 🎨!`
      cy.visit('/shop/basilisk')
      cy.contains("Basilisk Art Print 20x40");
      cy.get('#radix-\\:r11\\:').type(review)
      cy.get(':nth-child(15) > .gap-5 > .bg-black-magic').click()
      cy.contains(review)
    });
  });
});
