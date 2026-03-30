# Playwright UI Automation Framework (written in Typescript)

## Overview
This project demonstrates a scalable UI automation framework built using Playwright and TypeScript.
It follows best practices such as Page Object Model, separation of concerns, and CI/CD integration.

## Tech Stack
- Playwright
- TypeScript

## Project Structure

src
- pages: Page Object Models
- utils: Test data & helpers
- constants: URLs and environment configs

tests
- specs: Test cases

## How to Run
```bash
npm install
npx playwright test

## Test details

Tests are performed against the website https://practicetestautomation.com/practice-test-login/ .
Many thanks to it's author Dmitry Shyshkin.

Two tests were implemented :
1) Login with valid credentials and verify whether navigated to landing page.
2) Login with invalid credentials and very whether error message is displayed.

Screenshots of actual test run :
![alt text](https://github.com/neesara/playwright-ui-framework/blob/main/result1.png)
![alt text](https://github.com/neesara/playwright-ui-framework/blob/main/result2.png)