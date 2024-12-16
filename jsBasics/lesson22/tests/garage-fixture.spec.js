import { test } from "/Users/artem/Desktop/Automation/project/aqa-advanced/jsBasics/lesson22/src/fixtures/login.fixture.js";
import { expect } from '@playwright/test';

test.beforeEach(async ({ garagePage, page }) => {
  console.log(garagePage);
  console.log(page)
  })
test('Garage page sanity', { tag: '@thistest', }, async ({ garagePage }) => {
    await expect(garagePage.page).toHaveURL(/.*garage/);
    await expect(garagePage.locators.createdCar).toBeVisible();
    await garagePage.deleteCar();
})