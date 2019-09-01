Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar
    And I should see the search fields
    And I should see the sector lists
    And I should see the jobs blog
    And I should see the featured jobs
    And I should see the footer