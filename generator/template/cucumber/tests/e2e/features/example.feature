Feature: Search Google
  Scenario: I search for bread on Google
    Given I am on Google
    When I search for "bread"
    Then I should see "bread" in the title