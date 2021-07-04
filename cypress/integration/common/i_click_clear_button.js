import {When} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from "../../pages/HomePageOpenOceanStudio";

When ('I click Clear button', ()=>{
    HomePageOpenOceanStudio.clearButton().click()
})