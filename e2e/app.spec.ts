import { expect, test } from '@playwright/test';

test('homepage renders the memorial', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Tim Curry in New Zealand.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Read his story' })).toBeVisible();
  await expect(page.getByText('The show came. He didn\u2019t.')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'The role arrived. He didn\u2019t.' })
  ).toBeVisible();
  const heroImage = page.getByRole('img', { name: 'Portrait of Tim Curry', exact: true });
  await expect(heroImage).toBeVisible();
  await expect.poll(() => heroImage.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  await page.locator('#gallery').scrollIntoViewIfNeeded();
  const galleryImage = page.getByRole('img', {
    name: 'Tim Curry in the Read My Lips publicity photo, 1978',
    exact: true,
  });
  await expect(galleryImage).toBeVisible();
  await expect.poll(() => galleryImage.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
});

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  const aotearoaLink = page.getByRole('link', { name: 'Aotearoa', exact: true });
  await expect(aotearoaLink).toBeVisible();
  await aotearoaLink.click();
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
  await expect(aotearoaLink).toBeHidden();
});

test('music player opens without autoplay', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Listen to Tim Curry' }).click();
  await expect(page.getByRole('dialog', { name: 'Listen to Tim Curry' })).toBeVisible();
  await page.getByRole('button', { name: 'Sweet Transvestite', exact: true }).click();
  await expect(page.getByTitle('Sweet Transvestite')).toBeVisible();
});

test('sources page lists every clipping', async ({ page }) => {
  await page.goto('/sources');
  await expect(page.getByRole('heading', { name: /Sources & reading list/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /AudioCulture/ }).first()).toBeVisible();
});
