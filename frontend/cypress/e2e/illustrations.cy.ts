describe("Illustrations Page", () => {
  before(() => {
    // Reset the database before all tests
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
  });
  beforeEach(() => {
    cy.visit("/illustrations");
  });
  it("Should display category buttons for 'All', 'Neo-Slavic Census', 'Fantasy Illustrations', and 'Polish Legends'", () => {
    cy.findByRole("button", { name: /all/i });
    cy.findByRole("button", { name: /neo-slavic census/i });
    cy.findByRole("button", { name: /fantasy illustrations/i });
    cy.findByRole("button", { name: /polish legends/i });
  });

  it("Should initially show 9 illustrations", () => {
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 9);
  });
  it("Should display 4 illustrations after clicking the 'Neo-Slavic Census' button", () => {
    cy.findByRole("button", { name: /neo-slavic census/i }).click();
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 4);
  });
  it("Should display 3 illustrations after clicking the 'Fantasy Illustrations' button", () => {
    cy.findByRole("button", { name: /fantasy illustrations/i }).click();
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 3);
  });
  it("Should display 2 illustrations after clicking the 'Polish Legends' button", () => {
    cy.findByRole("button", { name: /polish legends/i }).click();
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 2);
  });
  it("Should display 9 illustrations after clicking any category button and then clicking the 'All' button", () => {
    cy.findByRole("button", { name: /neo-slavic census/i }).click();
    cy.findByRole("button", { name: /all/i }).as("allButton").click();

    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 9);

    cy.findByRole("button", { name: /fantasy illustrations/i }).click();
    cy.get("@allButton").click();

    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 9);

    cy.findByRole("button", { name: /polish legends/i }).click();
    cy.get("@allButton").click();

    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 9);
  });
});

// cy.intercept({
//   method: 'GET',
//   url: '/api/products/categories/neo-slavic-census',
// }).as('neoSlavicProducts')
// cy.intercept({
//   method: 'GET',
//   url: '/api/products/categories/fantasy-illustrations',
// }).as('fantasyIllustrationsProducts')

// cy.intercept({
//   method: 'GET',
//   url: '/api/videos/neo-slavic-census/3',
// }).as('ytData')

// cy.wait('@neoSlavicProducts').then((interception) => {
//   assert.isNotNull(interception.response.body, '1st API call has data')
// })
// cy.wait('@fantasyIllustrationsProducts').then((interception) => {
//   assert.isNotNull(interception.response.body, '1st API call has data')
// })
// cy.wait('@ytData').then((interception) => {
//   assert.isNotNull(interception.response.body, '1st API call has data')
// })
