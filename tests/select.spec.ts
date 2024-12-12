import { test } from '@playwright/test';

test('should select an item', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('First Favorite Animal', { exact: true }).click();
  await page.getByRole('option', { name: 'Dog' }).click();

  await page.getByLabel('Second Favorite Animal', { exact: true }).click();
  await page.getByRole('option', { name: 'Kangaroo' }).click();
  
  await page.getByLabel('Third Favorite Animal', { exact: true }).click();
  await page.getByRole('option', { name: 'Cat' }).click();
});
