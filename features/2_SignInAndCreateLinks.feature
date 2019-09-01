Feature: Sign in & Create Account links

  Scenario Outline: Sign in and Create account
    Given I go to the jobs page
    And I am not signed-in
    When I click on <link>
    Then I am taken to the <page> page

    Examples:
      | link | page |
      | SignIn | Logon |
      | CreateAccount | Register |