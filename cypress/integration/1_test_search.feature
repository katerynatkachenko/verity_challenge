Feature: Check the test search
  Verify that the search functionality works as intended and, that once search results are displayed,
  the following tabs are displayed and behaving correctly.

  Scenario: As a user, I want to verify that the search functionality works as intended and the header tabs are displayed
    Given I type input in browser search field and press Search
    When I change the region to Switzerland
    Then I verify the search result and header tabs