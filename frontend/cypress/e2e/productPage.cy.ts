import { products } from "../../src/utils/products";

const john = { email: "john@email.com", password: "123456" };
const admin = { email: "admin@email.com", password: "123456" };

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

  describe("When regular user logged in", function () {
    beforeEach(function () {
      cy.login(john);
    });
    it("User can write a review", () => {
      const review = `Great 🎨!`;
      cy.visit("/shop/basilisk");
      cy.findByRole("heading", { level: 1 }).should(
        "contain",
        "Basilisk Art Print 20x40",
      );
      cy.findByRole("textbox").type(review);
      cy.findByRole("button", { name: /add review/i }).click();
      cy.contains(review);
    });
    it("User can change size of the product", () => {
      cy.visit("/shop/basilisk");
      cy.findByRole("button", { name: /70x100/i }).click();
      cy.findByTestId("price-value").should("contain", "$499");
    });
    it("User can change material of the product", () => {
      cy.visit("/shop/basilisk");
      cy.findByRole("button", { name: /premium print/i }).click();
      cy.findByTestId("price-value").should("contain", "$59");
    });
    it("User can change quantity of products", () => {
      cy.visit("/shop/basilisk");
      cy.findByTestId("qty-select").click();
      cy.findAllByRole("option").eq(1).click();
      cy.findByTestId("qty-select").should("contain", "2");
    });
    it("User can add a product to the cart", () => {
      cy.visit("/shop/basilisk");
      cy.findByRole("button", { name: /add to cart/i }).click();
      cy.visit("/cart");
      cy.findAllByTestId("cart-product").should("have.length", 1);
    });
    it.only("User can add a product with changed size, material and quantity to the cart", () => {
      cy.visit("/shop/basilisk");
      cy.findByRole("button", { name: /painting on canvas/i }).click();
      cy.findByRole("button", { name: /70x100/i }).click();
      cy.findByTestId("qty-select").click();
      cy.findAllByRole("option").eq(2).click();

      cy.findByRole("button", { name: /add to cart/i }).click();

      cy.visit("/cart");
      cy.findAllByTestId("cart-product").should("have.length", 1);
      cy.findByTestId("cart-total-price").should("contain", "$1707.00");
    });
  });
});

// after(() => {
//   cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
//   cy.visit('')
// });
