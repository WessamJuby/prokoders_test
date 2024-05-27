Cypress Test Automation Framework
This project uses Cypress to automate end-to-end tests for "https://freetestapi.com/apis/languages".

as requested this project contains test cases for the operations : 
- Sort: Test sort Languages.
- Single: Test displaying the one of Languages.
- Limit: Test Limit Languages.
- Search: Test Search Languages.

also it generate report for the test execution results and it automatically log to the terminal if ran in terminal mode.



Prerequisites
I used: Node.js (v20.13.1) and npm(10.8.0) installed on your system.
A web browser (Chrome or Firefox are officially supported).


Setting Up
Clone the repository:

Bash
```
git clone https://github.com/WessamJuby/prokoders_test
```

Install dependencies:
Bash
```
cd your-project-name
npm install
```

Running Tests:
you can run tests in GUI mode using 
```
npx cypress open
```
and choosing the type of test and the test suite/file
or
you can run tests in command line mode using
```
npx cypress run
```
note: the report will only be generated in the commandline mode because gui mode already shows all the results for you.


Extending the Test Framework
Test File Structure:

Cypress test files are located in the cypress/integration directory. Each file should contain test cases for a specific functionality or feature.

Page Objects (Optional):

For better organization and reusability, you can create separate JavaScript files (usually in the cypress/pageObjects directory) to encapsulate page elements and interactions specific to each page of your application.

note: i didn't use POM since i tested only API requests the POM comes in handy when thesting web pages

Fixtures (Optional):
You can use fixtures to store test data (e.g., user credentials, API responses) and access them within your tests using cy.fixture('data.json'). Define fixture files in the cypress/fixtures directory.

Commands (Optional):
For complex reusable actions, you can create custom Cypress commands in the cypress/support/commands.js file.

CICD:
you can find a "cypress-tests.yml" YAML file at .github/workflows with basic configurations to run the cypress test in github actions
(also a docker file can be used for more robust)



Name: Wessam Juby
Email: wessamjuby1@gmail.com