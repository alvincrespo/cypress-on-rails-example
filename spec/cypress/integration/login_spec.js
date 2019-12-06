describe("Login", function() {
  beforeEach(() => {
    cy.app("clean"); // have a look at cypress/app_commands/clean.rb
  });

  it("works as expected", function() {
    cy.appFactories([["create", "user"]]);

    cy.visit("/");

    cy.get('input[type="email"]').type("bruce@wayneenterprise.com");
    cy.get('input[type="password"]').type("iambatman");

    cy.get('input[type="submit"]').click();

    cy.get("h1").should("contain", "Application Home");
  });
});
