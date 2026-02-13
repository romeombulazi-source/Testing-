import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: 'https://lsgumedeattorneys.co.za',

    headless: false,               // See browser
    screenshot: 'only-on-failure', // Debug easier
    video: 'retain-on-failure',
  },
});

