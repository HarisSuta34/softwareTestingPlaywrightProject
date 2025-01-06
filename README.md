# Facebook Testing Automation Project

This repository contains automated test scripts for Facebook using Playwright and JavaScript. The project includes five smoke tests and ten normal tests that validate various Facebook functionalities, such as logging in, posting media, sending messages, and more.

## Table of Contents
- [Project Description](#project-description)
- [Dependencies](#dependencies)
- [Setup Instructions](#setup-instructions)
- [Run Instructions](#run-instructions)
  - [Smoke Tests](#smoke-tests)
  - [Normal Tests](#normal-tests)
- [Challenges Faced](#challenges-faced)

## Project Description

The automation suite uses the Page Object Model (POM) framework to ensure code maintainability and reusability. Each Facebook page or functionality is represented as a class with methods to perform specific actions. The tests are written in JavaScript and executed using Playwright.

## Dependencies

Before running the tests, ensure the following dependencies are installed:
- [Node.js (v20.10.0)](https://nodejs.org/) or higher
- Playwright: A Node.js library for browser automation

You can install all required dependencies using the command:
```bash
npm init playwright@latest

Run Instructions
Smoke Tests run instructions
1. Login - npx playwright test ./tests/smoke-tests/loginapplication.spec.js
2. Logout - npx playwright test ./tests/smoke-tests/logoutapplication.spec.js
3. Home page load - npx playwright test ./tests/smoke-tests/homepageload.spec.js
4. Creating post - npx playwright test ./tests/smoke-tests/postapplication.spec.js
5. Send message - npx playwright test ./tests/smoke-tests/sendmessagepplication.spec.js

Normal Tests run instructions
1. Find friends - npx playwright test ./tests/normal-tests/seefriendslist.spec.js
2. Find birthdays - npx playwright test ./tests/normal-tests/seebirthdayslist.spec.js
3. Search test - npx playwright test ./tests/normal-tests/search.spec.js
4. Sending request - npx playwright test ./tests/normal-tests/friendrequest.spec.js
5. Group Creation - npx playwright test ./tests/normal-tests/creategroup.spec.js
6. Comment test - npx playwright test ./tests/normal-tests/comment.spec.js
7. Reels opening - npx playwright test ./tests/normal-tests/openreels.spec.js
8. Dark mode switch - npx playwright test ./tests/normal-tests/themetoggle.spec.js
9. Status post - npx playwright test ./tests/normal-tests/setfeeling.spec.js
10. Biography update - npx playwright test ./tests/normal-tests/writebio.spec.js

If you would wish to run all test at once in headless mode, you should do so by running: npx playwright test

Challenges Faced

Finding Reliable Selectors: Identifying stable selectors was critical to ensure consistent test execution. Dynamic elements and varying page structures required careful selection of locators.

Concurrent Test Execution: Configuring the project for parallel execution posed challenges related to test isolation and shared resource management.