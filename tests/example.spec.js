const { test, expect } = require("@playwright/test");

test.describe("Examples", () => {
    test("Testing locators", async ({ page }) => {
        //        
        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username");
        await page.locator('[placeholder="name@example.com"]').type("test@email.com");
        await page.locator('#currentAddress').type("This is the current address");
        await page.locator('#permanentAddress').type("This is the permanent address");
        await page.locator('button.has-text("Submit")').click();   
        await page.pause;

    });

})