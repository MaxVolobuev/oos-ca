let {options} = require("colorette");

const cucumber = require('cypress-cucumber-preprocessor').default

const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

const path = require('path');

module.exports = (on, config) => {
    on("file:preprocessor", cucumber());

    on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
    });

    on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
            console.log(lighthouseReport); // raw lighthouse reports
        }),
        pa11y: pa11y((pa11yReport) => {
            console.log(pa11yReport); // raw pa11y reports
        }),
    });

    const options = {
        outputRoot: config.projectRoot + '/logs/',
        // Used to trim the base path of specs and reduce nesting in the
        // generated output directory.
        specRoot: path.relative(config.fileServerFolder, config.integrationFolder),
        outputTarget: {
            'cypress-logs|json': 'json',
        }
    };
   // require("cypress-terminal-report/src/installLogsPrinter")(on);
    require("cypress-terminal-report/src/installLogsPrinter")(on, options);

};




/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars