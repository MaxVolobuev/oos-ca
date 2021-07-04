import { When, And, Then} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from '../../../pages/HomePageOpenOceanStudio.js';
import {ArrayValues} from '../../../Features/ArraysValues.js';
import {CompareMethod} from "../../../Features/CompareMethod";

When('I enter {string} name into search field', (title)=> {
   HomePageOpenOceanStudio.typeIntoNameSearchField(title)
});



And(/^Not contain "([^"]*)" in the name search field$/, function () {
  HomePageOpenOceanStudio.nameSearchField().should('not.have.value', 'lloyd')
    cy.lighthouse({
        performance: 10,
        accessibility: 10,
        "best-practices": 10,
        seo: 10,
        pwa: 10,
    });
});