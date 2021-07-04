import { When, And, Then} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from '../../../pages/HomePageOpenOceanStudio.js';


When('I enter {string} city into search field', (title)=> {
    HomePageOpenOceanStudio.typeIntoCitySearchField(title)
});

And(/^Not contain "([^"]*)" in the city search field$/, function () {
    HomePageOpenOceanStudio.citySearchField().should('not.have.value', 'liverpool')
    cy.pa11y()
});