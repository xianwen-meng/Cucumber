Feature: Baidu Search

  Scenario Outline: Search in Baidu
    Given Go to Baidu Site
    When I type the search keyword "<content>"
    And click the search button
    Then verify page contains search keyword "<content>"
    Examples:
      | content  |
      | Cucumber |
      | TestNg   |
      | DevOps   |