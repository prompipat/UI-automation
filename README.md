# UI Automation

This project is a small Playwright test suite for the Sauce Demo site.
It uses a page object model for the login page and a dedicated auth setup test
to create reusable storage state for browser projects.

## Tech Stack

- Playwright Test
- TypeScript
- Page Object Model

## Project Structure

- `tests/` - test specs and auth setup
- `pages/` - page objects
- `fixtures/` - custom test fixtures and test data
- `playwright.config.ts` - Playwright configuration

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run only the login tests:

```bash
npx playwright test tests/login.spec.ts
```

Run the auth setup test by itself:

```bash
npx playwright test tests/auth.setup.ts --project=setup
```

Open the HTML report:

```bash
npx playwright show-report
```

## How Auth Works

The suite uses a setup project to log in once and save storage state to:

```text
playwright/.auth/user.json
```

That state is then reused by the browser projects. The login spec explicitly
disables storage state so it can verify the login page itself.

## Test Data

Test users live in `fixtures/users.ts`.

## Notes

- The tests currently navigate directly to `https://www.saucedemo.com/`.
- If you want to run this in a different environment, update the URL in
  `pages/login.page.ts`.
