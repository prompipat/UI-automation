import { test } from '../fixtures/base'
import { expect } from '@playwright/test';
import { USERS } from '../fixtures/users';

test.use({ storageState: undefined });

test('@critical success login', async({loginPage, page}) => {
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);

    await expect(page).toHaveURL(/inventory/);
})

test('@payment Invalid login', async({loginPage ,page}) => {
    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');

    await expect(page.getByText('Username and password do not match')).toBeVisible();
})
