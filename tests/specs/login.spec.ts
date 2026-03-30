import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { USERS } from '../../src/utils/testData';
import { URLS } from '../../src/utils/urls';

test.describe('Login functionality', () => {

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(URLS.LOGIN);

    await loginPage.login(
      USERS.VALID_USER.username,
      USERS.VALID_USER.password
    );

    await expect(page).toHaveURL(/logged-in-successfully/);
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(URLS.LOGIN);
    await loginPage.login(
      USERS.INVALID_USER.username,
      USERS.INVALID_USER.password
    );
    
    await expect(loginPage.errorMessage,'Your username is invalid!').toBeVisible();
  });

});