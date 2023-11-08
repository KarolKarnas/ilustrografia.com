import { should } from "chai";

describe("Home Page", () => {
  beforeEach(() => {
    // Visit the Ilustrografia website and block YouTube video requests
    cy.visit("");
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:3000/api/videos/neo-slavic-census/*",
      },
      (req) => {
        req.destroy();
      },
    );
  });

  describe("Proper Rendering", () => {
    it("Should render a single h1 element", () => {
      cy.get("h1").should("have.length", 1);
    });

    it("Should render all required sections", () => {
      cy.get('h1:contains("Reality Full of Magic")').should("exist");
      cy.get('h3:contains("Greetings, Wanderer!")').should("exist");
      cy.get('h3:contains("Neo-Slavic Census")').should("exist");
      cy.get('h3:contains("Fantasy Illustrations")').should("exist");
      cy.get('h3:contains("Latest animations!")').should("exist");
    });

    it("Should render valid links ", () => {
      cy.get("a[href='/shop']").should("exist");
      cy.get("a[href='/about']").should("exist");
      cy.get("a[href='/projects/neo-slavic-census']").should("exist");
      cy.get("a[href='/projects/fantasy-illustrations']").should("exist");
    });
  });

  describe("Within the 'Neo-Slavic Census' Section", () => {
    beforeEach(() => {
      cy.findByTestId("neo-slavic-section").as("neoSlavicSection");
    });

    it("Should contain 4 products", () => {
      cy.get("@neoSlavicSection").within(() => {
        cy.findAllByRole("product").should("have.length", 4);
      });
    });
    it("Should contain 4 illustrations", () => {
      cy.get("@neoSlavicSection").within(() => {
        cy.findAllByTestId("img").should("have.length", 4);
      });
    });
  });
  describe("Within the 'Fantasy Illustrations' Section", () => {
    beforeEach(() => {
      cy.findByTestId("fantasy-illustrations-section").as(
        "fantasyIllustrationsSection",
      );
    });

    it("Should contain 3 products", () => {
      cy.get("@fantasyIllustrationsSection").within(() => {
        cy.findAllByRole("product").should("have.length", 3);
      });
    });
    it("Should contain 3 illustrations", () => {
      cy.get("@fantasyIllustrationsSection").within(() => {
        cy.findAllByTestId("img").should("have.length", 3);
      });
    });
  });
});
