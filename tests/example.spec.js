const { test, expect } = require("@playwright/test");

test.describe("Examples", () => {
    test("Testing locators", async ({ page }) => {
        //        
        await page.goto("/text-box");
        await page.locator('#userName').type("Test Username");
        await page.locator('[placeholder="name@example.com"]').type("siteco5432@advitize.com");
        await page.locator('[placeholder="Current Address"]').type("Current address test");
        await page.locator('#permanentAddress').type("Test");
        await page.locator('#submit').click(); 

        await page.pause();
        
        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('p#currentAddress');
        const permanentAddress = page.locator('p#permanentAddress');

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username');
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:siteco5432@advitize.com');
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText('Current Address :Current address test');
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText('Permananet Address :Test');

    });

})