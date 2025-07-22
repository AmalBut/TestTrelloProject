Feature: Create a board in trello

    Scenario: Create new board
        Given The user login to trello website
        When Clicks on Create button in navbar
        And Chooses Create board option
        And Types board name in Board title field
        And Clicks on create button
        Then The board should be created successfully