test('Contact form blocks submission when message is empty', async ({ page }) => {
  await page.goto('https://www.lsgumedeattorneys.co.za/contact');

  await page.getByLabel('Full Name').fill('Jane Doe');
  await page.getByLabel('Email').fill('jane@test.com');

  await page.getByRole('button', { name: 'Send Message' }).click();

  await expect(page).toHaveURL('https://www.lsgumedeattorneys.co.za/contact');
});
