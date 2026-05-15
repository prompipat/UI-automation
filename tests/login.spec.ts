import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page'

test('success login', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce');

    await expect(page).toHaveURL(/inventory/);
})

test('Invalid login', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');

    await expect(page.getByText('Username and password do not match')).toBeVisible();
})