import {And} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from "../../pages/HomePageOpenOceanStudio";


And('Press Submit button',()=>{
    HomePageOpenOceanStudio.submitButton()

})