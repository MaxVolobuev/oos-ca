Feature: Move candidate for interview

  I want to move candidate to Interview column

  @focus
  Scenario: Moving candidate for interview
    Given I open OpenOceanStudio home page
    When I move "lloyd gonzalez" ito Interview column
    Then I see "lloyd gonzalez" in the Interview column
    When I move "lloyd gonzalez" ito Hired column
    Then I see "lloyd gonzalez" in the Hired column

