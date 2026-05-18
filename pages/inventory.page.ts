import { Page } from "@playwright/test";

export class InventoryPage {
    constructor(private page: Page) {}

    async addBackpackToCart() {
        await this.page.getByText('Add to cart').first().click()
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click()
    }
}