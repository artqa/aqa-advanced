import { test as setup, expect } from '@playwright/test';


const email = 'octopus@sea.com';
const password = 'Crusader1!';

setup('Precondition login', async({ browser }) => {
  const context = await browser.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
  const page = await context.newPage();
  await page.goto('https://qauto.forstudy.space');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[id="signinEmail"]').fill(email)
  await page.locator('input[id="signinPassword"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  // eslint-disable-next-line playwright/no-standalone-expect
  await expect(page.getByRole('button', { name: 'Add car' })).toBeVisible();
  await page.context().storageState({ path: 'session-storage.json' });
})