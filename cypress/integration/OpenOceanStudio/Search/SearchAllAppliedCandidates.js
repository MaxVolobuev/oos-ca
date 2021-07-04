import { When, Then} from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from '../../../pages/HomePageOpenOceanStudio.js';
import {ArrayValues} from '../../../Features/ArraysValues.js';
import {CompareMethod} from "../../../Features/CompareMethod";

When('I scroll Applied result column', ()=>{
    HomePageOpenOceanStudio.appliedResultsByName()
})

Then('I see 4 candidates in Applied columns', ()=>{
    CompareMethod.compareEachNames(HomePageOpenOceanStudio.appliedResultsByName(), ArrayValues.appliedColumn())
})

