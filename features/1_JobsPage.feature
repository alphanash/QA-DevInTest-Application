Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar


  Scenario Outline: Search fields render
    Given I go to the jobs page
    Then I should see the search field for <field>
    Examples:
      | field          |
      | Keywords       |
      | radialtown     |
      | RadialLocation |


  Scenario Outline: Sector links render
    Given I go to the jobs page
    Then I should see the sector link for <sector>
    Examples:
      | sector                      |
      | banking-and-finance         |
      | business-services           |
      | it-and-telecoms             |
      | government                  |
      | academia                    |
      | primary-and-utility         |
      | retail-and-distribution     |
      | charity                     |
      | international-public-sector |
      | ngo                         |
      | health                      |
      | humanitarian                |
      | other                       |


  Scenario: Jobs blog renders
    Given I go to the jobs page
    Then I should see the jobs blog


  Scenario: Featured jobs section renders
    Given I go to the jobs page
    Then I should see the featured jobs


  Scenario: Footer element renders
    Given I go to the jobs page
    Then I should see the footer

