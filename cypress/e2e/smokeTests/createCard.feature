Feature: Create Card functionallity

    Scenario: Validate that the user can create the card
        Given The user navigated to board
        When Clicks on Add a Card button
        And Types card title in card title input field
        And Clicks on Add Card button
        Then The card should be created successfully