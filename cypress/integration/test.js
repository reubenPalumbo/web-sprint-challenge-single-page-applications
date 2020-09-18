//can add text to the box
//can select multiple toppings
//can submit the form

describe("Main Test", function () {
  it("MVP TESTS", function () {
    // actions and assertions go here
    cy.visit("http://localhost:3000/");

    cy.contains("Pizza!").click();
    cy.get("input[name=name]").type("TEST INPUT");
    cy.get("input[name=chicken]").check();
    cy.get("input[name=onions]").check();
    cy.get("input[name=sause]").check();
    cy.get("select[name=size]").select("large");
    cy.get("button").click();
  });
});
