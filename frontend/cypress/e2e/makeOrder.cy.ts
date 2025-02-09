import { users } from "../fixtures/users";

const [admin, john, jane] = users;

describe("Ilustrografia User Order Process", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });
  it("Should allow a logged-in user to place an order with one product", () => {
    //make order
    cy.loginNoSession(john);
    cy.visit("/shop/shopping-baba");
    cy.findByRole("button", { name: /add to cart/i }).click();
    cy.visit("/cart");
    cy.findByRole("button", { name: /proceed to checkout/i }).click();
    cy.findByRole("textbox", { name: /address/i }).type("FakeStreet 11");
    cy.findByRole("textbox", { name: /city/i }).type("FakeTown");
    cy.findByRole("textbox", { name: /postal code/i }).type("1-1-2-3-5-8-13");
    cy.findByRole("textbox", { name: /country/i }).type("FakeCountry");
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByRole("button", { name: /place order/i }).click();
    cy.contains("Order Details");
    //check order number
    cy.visit("/profile");
    cy.get("tbody").find("tr").should("have.length", 1);
  });

  it("Should display 'Out of Stock' button when a products variation is out of stock", () => {
    cy.visit("/shop");
    cy.findAllByTestId("product")
      .eq(0)
      .findByRole("button", { name: /30x40/i })
      .click({
        force: true,
      });
    cy.findByRole("button", { name: /out of stock/i }).should("exist");
  });

  it("Should allow a logged-in user to place an order with all available products and variations", () => {
    const productSizesA = [
      "20x40",
      "30x40",
      "40x60",
      "50x70",
      "60x90",
      "70x100",
    ];
    const productSizesB = [
      "20x30",
      "30x40",
      "40x60",
      "50x70",
      "60x90",
      "70x100",
    ];
    const productsA = ["painting on canvas"];

    const productsB = ["poster", "premium print"];

    cy.loginNoSession(john);
    cy.visit("/shop");

    // add all products to cart
    cy.findAllByTestId("product").each(($product) => {
      cy.wrap($product).within(() => {
        cy.findByTestId("addToCartBtn").as("addToCartBtn");

        productSizesA.forEach((size) => {
          cy.findByRole("button", { name: new RegExp(size, "i") }).click({
            force: true,
          });
          cy.get("@addToCartBtn").click({
            force: true,
          });
        });

        productsA.forEach((product) => {
          cy.findByRole("button", { name: new RegExp(product, "i") }).click({
            force: true,
          });
          productSizesA.forEach((size) => {
            cy.findByRole("button", { name: new RegExp(size, "i") }).click({
              force: true,
            });
            cy.get("@addToCartBtn").click({
              force: true,
            });
          });
        });

        productsB.forEach((product) => {
          cy.findByRole("button", { name: new RegExp(product, "i") }).click({
            force: true,
          });
          productSizesB.forEach((size) => {
            cy.findByRole("button", { name: new RegExp(size, "i") }).click({
              force: true,
            });
            cy.get("@addToCartBtn").click({
              force: true,
            });
          });
        });
      });
    });

    //make order
    cy.visit("/cart");
    cy.findAllByTestId("cart-product").should("have.length", 215);
    cy.findByRole("button", { name: /proceed to checkout/i }).click();
    cy.findByRole("textbox", { name: /address/i }).type("FakeStreet 11");
    cy.findByRole("textbox", { name: /city/i }).type("FakeTown");
    cy.findByRole("textbox", { name: /postal code/i }).type("1-1-2-3-5-8-13");
    cy.findByRole("textbox", { name: /country/i }).type("FakeCountry");
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByRole("button", { name: /place order/i }).click();
    cy.contains("Order Details");
    //check order number
    cy.visit("/profile");
    cy.get("tbody").find("tr").should("have.length", 1);
  });
});
