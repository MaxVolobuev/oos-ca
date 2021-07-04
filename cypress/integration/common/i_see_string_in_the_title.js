import {Then} from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title, {
        onBeforeLoad: (win) => {
            win.performance.mark('start-loading');
            performance.mark("speed1");
            const speed1Entries = performance.getEntriesByName("speed1");
            console.log(speed1Entries.length);
        }
    })
})