/// <reference types= "cypress" />

class createCardActions{

    openBoard(boardUrl){
        cy.visit(boardUrl);
        return this;
    }

    clickOnAddACardButton(){
        cy.findByTestId("findByTestId").first().click();
        return this;
    }

    typeCardTitleInCardTitleField(cardTitle){
        cy.findByTestId("list-card-composer-textarea").type(cardTitle);
        return this;
    }

    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button");
        return this;
    }
    
}
export default createCardActions;