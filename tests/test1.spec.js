import { test, expect } from '@playwright/test';
test('User cannot submit contact form with invalid email', async ({ page }) => {
  await page.goto('https://lsgumedeattorneys.co.za/contact');

  await page.fill('#name', 'Test User');
  await page.fill('#email', 'testuseexample.com');
  await page.fill('#phone', '0791234567');
  await page.fill('#message', 'This is a test message for QA automation.');

  await page.click('button[type="submit"]');

  await expect(page.url()).toContain('/contact');});


