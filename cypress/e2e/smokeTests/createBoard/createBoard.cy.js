/// <reference types= "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/Actions.cy";
const createBoardAction = new createBoardActions();
const boardTitle = "First Board cy"
Given('The user login to trello website', () => {
    cy.loginToTrello();
})

When('Clicks on Create button in navbar', () => {
    createBoardAction.clickOnCreateButtonInNavBar();
})

When('Chooses Create board option', () => {
    createBoardAction.chooseCreateBoardOption();
})

When('Types board name in Board title field', () => {
    createBoardAction.typeBoardNameInBoardTitleField(boardTitle);
})

When('Clicks on create button', () => {
    createBoardAction.clickOnCreateButton();
})

Then('The board should be created successfully', () => {

})