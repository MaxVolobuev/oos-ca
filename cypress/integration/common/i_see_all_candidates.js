import {Then} from "cypress-cucumber-preprocessor/steps";
import {CompareMethod} from "../../Features/CompareMethod";
import {HomePageOpenOceanStudio} from "../../pages/HomePageOpenOceanStudio";
import {ArrayValues} from "../../Features/ArraysValues";

Then('i See all candidates',()=>{
    CompareMethod.compareEachNames(HomePageOpenOceanStudio.allColumns(), ArrayValues.allCandidates())
})