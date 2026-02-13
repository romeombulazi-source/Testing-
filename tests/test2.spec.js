import { test, expect } from '@playwright/test';
test('User can submit contact form with valid data', async ({ page }) => {
  await page.goto('https://lsgumedeattorneys.co.za/contact');

  page.getByLabel('name').fill('Test User');
  page.getByLabel('email').fill('testuser@example.com');
  page.getByLabel('phone').fill('0791234567');
  page.getByLabel('message').fill('This is a test message for QA automation.');
page.getByRole('button', {name : 'submit'}).click();


  
  await expect(page).toHaveURL(/contact/);
});
