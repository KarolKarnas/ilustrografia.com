import { products } from "../../src/utils/products";
import { users } from "../fixtures/users";

after(() => {
  cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  // cy.visit('')
});

describe("Product Page", () => {
  describe("All products are rendered on the ProductPage", () => {
    beforeEach(() => {
      cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    });

    products.forEach((product) => {
      it(`Should open the ${product.name} ProductPage and display the product details`, () => {
        cy.visit(`/shop/${product.slug}`);
        cy.findByRole("heading", { level: 1 }).should(
          "contain",
          `${product.name} Art Print 20x40`,
        );
      });
    });
  });

  describe("When a user is not logged in", () => {
    beforeEach(() => {
      cy.visit("/shop/basilisk");
    });

    it("Should allow the user to change the size of the product", () => {
      cy.findByRole("button", { name: /70x100/i }).click();
      cy.findByTestId("price-value").should("contain", "$499");
    });

    it("Should allow the user to change the material of the product", () => {
      cy.findByRole("button", { name: /premium print/i }).click();
      cy.findByTestId("price-value").should("contain", "$59");
    });

    it("Should allow the user to change the quantity of products", () => {
      cy.findByTestId("qty-select").click();
      cy.findAllByRole("option").eq(1).click();
      cy.findByTestId("qty-select").should("contain", "2");
    });

    it("Should prevent the user from writing a review", () => {
      cy.get('a[href="/login"]').should("exist");
      cy.get('a[href="/login"]').should("contain", "log in");
      cy.contains("To write a review you must log in");
    });
  });

  describe("When a regular user is logged in", () => {
    beforeEach(() => {
      cy.login(users[1]);
      cy.visit("/shop/basilisk");
    });

    it("Should allow the user to write a review for the product", () => {
      const review = `Great 🎨!`;
      cy.findByRole("heading", { level: 1 }).should(
        "contain",
        "Basilisk Art Print 20x40",
      );
      cy.findByRole("textbox").type(review);
      cy.findByRole("button", { name: /add review/i }).click();
      cy.contains(review);
    });

    it("Should allow the user to add a product to the cart", () => {
      cy.findByRole("button", { name: /add to cart/i }).click();
      cy.visit("/cart");
      cy.findAllByTestId("cart-product").should("have.length", 1);
    });

    it("Should allow the user to add a product to the cart with custom size, material, and quantity", () => {
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
