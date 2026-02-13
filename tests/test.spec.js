import { test, expect } from '@playwright/test';
test('Contact page loads', async ({ page }) => {
  await page.goto('https://lsgumedeattorneys.co.za/contact');
  await expect(page.getByText('Office Hours')).toBeVisible();
});


