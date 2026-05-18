import { test } from '../fixtures/base'
import { expect } from '@playwright/test';
import { USERS } from '../fixtures/users';

test('@smoke success login', async({loginPage, page}) => {
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);

    await expect(page).toHaveURL(/inventory/);
})

test('@spike Invalid login', async({loginPage ,page}) => {
    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');

    await expect(page.getByText('Username and password do not match')).toBeVisible();
})