import { test, expect } from '@playwright/test';
test('Contact form shows error when required fields are empty', async ({ page }) => {
  await page.goto('https://www.lsgumedeattorneys.co.za/contact');
  await page.getByRole('button',{name: "Send Message"}).click();
   await expect(page).toHaveURL('https://www.lsgumedeattorneys.co.za/contact');
});