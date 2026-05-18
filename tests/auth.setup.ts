import { test } from '../fixtures/base'
import { USERS } from '../fixtures/users';

test('success login', async({loginPage, page}) => {
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});