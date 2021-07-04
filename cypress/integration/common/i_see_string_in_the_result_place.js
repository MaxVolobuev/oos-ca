import {Then} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from "../../pages/HomePageOpenOceanStudio";

Then('I see {string} in the result place', (title)=>{
    HomePageOpenOceanStudio.allColumns().should(  "contain",title)
    HomePageOpenOceanStudio.allColumns().should(  "not.contain",'emma')
})