Feature: OpenOceanStudio Main Page

  I want to open a home engine

  @focus
  Scenario: Opening a home page
    Given I open OpenOceanStudio home page
    Then I see "OOS: Crew applications" in the title