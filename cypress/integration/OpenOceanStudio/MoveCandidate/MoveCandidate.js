import { When, Then} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from '../../../pages/HomePageOpenOceanStudio.js';


When('I move {string} ito Interview column', ()=> {
    HomePageOpenOceanStudio.lloydAppliedNextButton().click()
});

Then('I see {string} in the Interview column', (name)=>{
    HomePageOpenOceanStudio.interviewResultsByName().should(  "contain",name)
    HomePageOpenOceanStudio.interviewResultsByName().should(  "not.contain",'emma')
})


When('I move {string} ito Hired column', ()=> {
    HomePageOpenOceanStudio.lloydInterviewNextButton().click()
});

Then('I see {string} in the Hired column', (name)=>{
    HomePageOpenOceanStudio.hiredResultsByName().should(  "contain",name)
    HomePageOpenOceanStudio.hiredResultsByName().should(  "not.contain",'emma')
    HomePageOpenOceanStudio.hiredResultsByName().should(  "contain",'julia cunningham')
})