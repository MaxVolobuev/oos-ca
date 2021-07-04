import {Then} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from '../../../pages/HomePageOpenOceanStudio.js';


Then('I see "julia cunningham" has already hired', ()=>{
    HomePageOpenOceanStudio.hiredResultsByName().should(  "contain",'julia cunningham')
    HomePageOpenOceanStudio.hiredResultsByName().should(  "not.contain",'emma')
        // Get the performance property to work with

   // cy.lighthouse()
})

