// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToTrello", (email, password) => {
    cy.visit("https://id.atlassian.com/login?application=trello");
    cy.intercept("https://id.atlassian.com/login?application=trello").as("wait");
    cy.wait("@wait");
    cy.get("[name='username']").type("amalbutmah376@gmail.com");
    cy.get("#login-submit").click();
    cy.get("#password").type("amal123123@#");
    cy.get("#login-submit").click();
    cy.wait(30000);
    cy.origin("https://home.atlassian.com/", () =>{
        cy.get(".css-sefnzj").eq(0).click({force:true});
    })
    cy.wait(5000);
})

Cypress.Commands.add("findByTestId",()=>{
    cy.origin('https://trello.com/', (testid) => {
    cy.get(`[data-testid=${testid}]`);
    })
})