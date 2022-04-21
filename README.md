# Frontend Q.A. Technical Assessment with Cypress

## Introduction

The following assessment consists of 4 integration specs, and 4 feature test cases, which were written with a help of BDD tool - Cucumber.
Cucumber tests are divided into individual Features. These Features are subdivided into Scenarios, which are sequences of the test Steps.

### Instructions:

1. Extract verity_challenge.zip
2. Go to folder verity_challenge
3. Run `npm install` command
4. There are 3 ways of running test specs: headed, headless & by using test runner
   1. for headed mode: run `./node_modules/.bin/cypress run --headed --browser firefox`
   2. for headless mode: run `./node_modules/.bin/cypress run --browser firefox`
   3. for running in the cypress test runner: run `./node_modules/.bin/cypress open`
      1. after the test runner is open, select 'Firefox' browser from drop down menu, in the top right corner
      and press 'Run 4 integration specs' button

**Note:** If cypress is installed locally on your device, simply use script commands, without node_modules:

1. `cypress run --headed --browser firefox`
2. `cypress run --browser firefox`
3. `npm run cypress:open`


## Tasks

**Test 1.** `test_search.js` 
1. Opens www.duckduckgo.com, search input field by id.
2. Types input string and press 'Search' button. 
3. Changes the dropdown region to Switzerland (de), by using scrollIntoView() method. 
4. Verifies the search results and header tabs, using visibility assertion. 

#### Invested time: 30 minutes

**Test 2.** `faq_accordion.js` 
1. Opens www.duckduckgo.com, scroll into FAQ questions, using scrollIntoView() method.
2. Unfold each of the question, by clicking on arrow buttons, and check the text, using visibility assertion.
3. Checks if the text from closed answers is no longer displayed, using non visibility assertion.

#### Invested time: 25 minutes

**Test 3.** `autocomplete.js` 
1. Opens www.duckduckgo.com, type into input field a string 'zurich'.
2. Checks if each of these output result, contains that word, by using `each` iteration.

#### Invested time: 30 minutes

**Test 4.** `newsletter.js` 
1. Opens www.duckduckgo.com/about and type a sample email to subscribe to the newsletter.
2. Presses click and checks if the `pathname` location was changed to the new value `/newsletter/subscription/subscribe` 

#### Invested time: 30 minutes

**Possible improvement:** in order to test email process in the end-to-end mode, I would use third party API tool: MailSlurp,
which creates real, randomized email address, and let you send and receive email programmatically. 

#### Invested time for editing, adding cucumber steps and writing ReadMe: 50 minutes