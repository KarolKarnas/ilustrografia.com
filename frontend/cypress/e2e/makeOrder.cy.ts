import { users } from "../fixtures/users";

const [admin, john, jane] = users;

describe("ilustrografia", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });
  it("Buing time", () => {
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
});
