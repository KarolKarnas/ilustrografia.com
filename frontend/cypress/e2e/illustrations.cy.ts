describe("IllustrationsPage", () => {
  beforeEach(() => {
    cy.visit("/illustrations");
  });
  it("IllustrationsPage can be opened", () => {
    cy.findByRole("button", { name: /all/i });
    cy.findByRole("button", { name: /neo-slavic census/i });
    cy.findByRole("button", { name: /fantasy illustrations/i });
    cy.findByRole("button", { name: /polish legends/i });
  });

  it("Initially there are 9 illustrations", () => {
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 9);
  });
  it("There are 4 illustrations, after button 'neo-slavic census' click", () => {
    cy.findByRole("button", { name: /neo-slavic census/i }).click();
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 4);
  });
  it("There are 3 illustrations, after button 'fantasy illustrations' click", () => {
    cy.findByRole("button", { name: /fantasy illustrations/i }).click();
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 3);
  });
  it("There are 2 illustrations, after button 'polish legends' click", () => {
    cy.findByRole("button", { name: /polish legends/i }).click();
    cy.findByLabelText("Image Gallery")
      .findAllByRole("img")
      .should("have.length", 2);
  });
  it("There are 9 illustrations, after clicking any category button, an click the 'All' button after", () => {
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
