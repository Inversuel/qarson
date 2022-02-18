describe("Test E2E", () => {
  it("test send form", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid=buttonActive1]').trigger('mouseover');
    cy.get('[data-testid=buttonActive11]').trigger('mouseover');
    cy.get('[data-testid=buttonActive1]').contains("Active");
    cy.get('[data-testid=buttonActive1]').click();
    cy.get('[data-testid=buttonActive1]').contains("Not Active");
    cy.get('[data-testid=buttonDelete1]').click();
    cy.get('[data-testid=buttonActive1]').should("not.exist");

  });
});