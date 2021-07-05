Hey here is brief instruction how to run cypress tests:

### Before running the tests you have to start local server with application:

Running in docker command:

npm run docker:run

App will be available on http://localhost:5000

### If you want run cypress with browser mode you should execture command in terminal:

npm run cy:open:locally

### If you want ti run tests with headless mode:

npm run cy:run:locally

All Video are available in cypress/videos

All screenshots with failed test in cypress/screenshots

All Logs oos-ca/logs

### For performance testing i am using:
performance.mark()
https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark

And

Cypress audit
https://github.com/mfrachet/cypress-audit#preparation

BE Aware that 2 tests in Search.feature fail of the bug:
- Searching by name and clear;
- Searching by city and clear.

The reason that when user clicks Clear button, the string value still in the search field and assertion fails

