/// <reference types= "cypress" />
import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import createCardActions from "../../../pageObjects/createCard/Actions.cy";
const datautil = new dataUtiles();
const cardAction = new createCardActions();
let boardId, boardUrl;

before(()=>{
    datautil.createBoard("AmalBoard").then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id;
    });
    cy.loginToTrello();
})

Given("The user navigated to board", () => {
    cardAction.openBoard(boardUrl);
})

// When("Clicks on Add a Card button", () => {
//     cardAction.clickOnAddaCardButton();
// })

// When("Types card title in card title input field", () => {
//     cardAction.typeCardTitleInCardTitleField("New Card")
// })

// When("Clicks on Add Card button", () => {
//     cardAction.clickOnAddCardButton();
// })

// Then("The card should be created successfully", () => {

// })

// after(()=>{
//     datautil.deleteBoard(boardId);
// })