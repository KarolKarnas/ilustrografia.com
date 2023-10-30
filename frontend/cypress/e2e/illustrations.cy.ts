describe("ilustrografia", () => {




  it("IllustrationsPage can be opened", () => {

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
  

    cy.visit("http://localhost:3000/illustrations");

    // cy.wait('@neoSlavicProducts').then((interception) => {
    //   assert.isNotNull(interception.response.body, '1st API call has data')
    // })
    // cy.wait('@fantasyIllustrationsProducts').then((interception) => {
    //   assert.isNotNull(interception.response.body, '1st API call has data')
    // })
    // cy.wait('@ytData').then((interception) => {
    //   assert.isNotNull(interception.response.body, '1st API call has data')
    // })

    cy.contains('Neo-Slavic Census')
  });
});
