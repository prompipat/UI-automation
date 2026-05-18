import { Page } from "@playwright/test";

export class CheckoutPage {
    constructor(private page: Page) {}

    async fillInfomation() {
        await this.page.getByPlaceholder('First Name').fill('Jane')
        await this.page.getByPlaceholder('Last Name').fill('Doe')
        await this.page.getByPlaceholder('Zip/Postal Code').fill('11500')
    }

    async continue() {
        await this.page.getByRole('button', {name: 'Continue'}).click()
    }

    async finish() {
        await this.page.getByRole('button', {name: 'Finish'}).click()
    }
}