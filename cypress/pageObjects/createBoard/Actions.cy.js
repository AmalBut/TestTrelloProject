/// <reference types= "cypress" />

class createBoardActions{

    clickOnCreateButtonInNavBar(){
        cy.findByTestId("header-create-menu-button").click();
        return this;
    }

    chooseCreateBoardOption(){
        cy.findByTestId("header-create-board-button").click();
        return this;
    }

    typeBoardNameInBoardTitleField(boardName){
        cy.findByTestId("create-board-title-input").type(boardName);
        return this;
    }

    clickOnCreateButton(){
        cy.findByTestId("create-board-submit-button").click();
        return this;
    }
}
export default createBoardActions;