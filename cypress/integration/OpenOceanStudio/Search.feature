Feature: Search people by name

  I want to search people by name

  @focus
  Scenario: Searching by name and clear
    Given I open OpenOceanStudio home page
    When I enter "lloyd" name into search field
    And Press Submit button
    Then I see "lloyd gonzalez" in the result place
    When I click Clear button
    Then i See all candidates
    And Not contain "lloyd" in the name search field


  @focus
  Scenario: Searching by city and clear
    Given I open OpenOceanStudio home page
    When I enter "liverpool" city into search field
    And Press Submit button
    Then I see "linda ruiz" in the result place
    When I click Clear button
    Then i See all candidates
    And Not contain "liverpool" in the city search field


  @focus
  Scenario: Searching all people by name
    Given I open OpenOceanStudio home page
    When I scroll Applied result column
    Then I see 4 candidates in Applied columns
