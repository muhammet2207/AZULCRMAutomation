Feature: As a user, I should be able to use functions under Employees menu

  Background:
    Given the user logged in
    When the user clicks to Employees tab
@AZUL-742
  Scenario: User should be able to display company structure
    Then the user should be able to see title as "(1) Company Structure"
@AZUL-743
  Scenario: User should be able to add a department
    Then the user should be able to see title as "(1) Company Structure"
    When the user clicks the Add Department button
    And the user writes Department Name
    And the user select Parent Department
    And the user clicks Add button
    Then the user should be able to see the added department
@AZUL-744
  Scenario: User should be able to find employees by search box
    Given the user clicks Find Employee tab
    Then the user should be able to see title as "(1) Find Employee"
    When the user search "Alex Deep" via search box
    Then the user should be able to see employees name as "Alex Deep"
@AZUL-745
  Scenario: User should be able to find employees by search by Alphabet
    Given the user clicks Find Employee tab
    Then the user should be able to see title as "(1) Find Employee"
    When the user clicks Search By Alphabet tab
    And the user choose any alphabet
    Then the user should be able to see the employees name