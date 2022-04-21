Feature: Newsletter form
  Ensure that newsletter form is working correctly

  Scenario: As a user, I want to verify that the newsletter form is working correctly
    Given I type an email to subscribe to the newsletter
    Then Check if the pathname is equal to the redirected page value