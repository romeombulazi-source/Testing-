import { test, expect } from '@playwright/test';
test('WhatsApp button opens WhatsApp chat', async ({ page }) => {
  await page.goto('https://lsgumedeattorneys.co.za/contact');

  const whatsappLink = page.locator('a[href="https://wa.me/27790134813"]');

  await expect(whatsappLink).toBeVisible();
  await expect(whatsappLink).toHaveAttribute('target', '_blank');
});
