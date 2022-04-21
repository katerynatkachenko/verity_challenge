Feature: Autocomplete
  While typing on the search input, a request is made to the server in order to populate the autocomplete options.
  Test intercepts that request and ensures that the autocomplete options are displayed to the user.

  Scenario: As a user, I want to verify that the autocomplete options are displayed to me
    Given I type input in the search field
    Then Check if each output result contains word zurich