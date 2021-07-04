import { Given } from "cypress-cucumber-preprocessor/steps";
import {HomePageOpenOceanStudio} from '../../pages/HomePageOpenOceanStudio.js';

// const openOceanStudio = new HomePageOpenOceanStudio('.main');
// beforeEach('Open url', () => {
//     openOceanStudio.visit('LOCALENV')
// });

const url = 'localhost:5000'
Given('I open OpenOceanStudio home page', () => {
    cy.visit(url, {
        onBeforeLoad: (win) => {
            win.performance.mark('start');
        }
    })
        .its('performance').then((performance) => {
        performance.mark('start');
        cy.get('.App-title').should('have.text', 'OpenOceanStudio: Crew Applications')
    .then(() => performance.mark('end-loading'))
    .then(() => {
            performance.measure('pageLoad', 'start', 'end-loading');
            const measure = performance.getEntriesByName('pageLoad')[0];
            const duration = measure.duration;
            assert.isAtMost(duration, 5000);

            cy.log(
                `[PERFORMANCE] Page load duration for HOME: ${duration / 1000} seconds`
            );
        });

    });
});

