Feature: FAQ accordion
  At the bottom of the https://duckduckgo.com/ page (in firefox) you will find an accordion
  with Frequently Asked Questions. Ensure that the accordion is in place and functioning as expected.

  Scenario: As a user, I want to verify that the accordion is in place and functioning as expected
    Given I scroll into FAQ questions and check the first one
    When I unfold each of the FAQ questions and check text compatibility
    Then I verify if the text from closed answers is no longer displayed