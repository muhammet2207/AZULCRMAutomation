Feature: Login

  @wip
  Scenario: the user should be able to login
    Given the user on the login page
    When the user enters the valid credentials
    And the user clicks login button
    Then the user should be able to see title as "(1) Portal"