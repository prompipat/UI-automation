import { test } from "../../fixtures/base";
import { LoginPage } from "../../pages/login.page";
import { InventoryPage } from "../../pages/inventory.page";
import { CartPage } from "../../pages/cart.page";
import { CheckoutPage } from "../../pages/checkout.page";
import { expect } from "@playwright/test";

test('successful checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page)   
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce');
    
    await inventoryPage.addBackpackToCart()
    await inventoryPage.openCart()

    await cartPage.checkout()

    await checkoutPage.fillInfomation()
    await checkoutPage.continue()
    await checkoutPage.finish()
    
    await expect(page.getByText('Thank you for your order!')).toBeVisible()
})
