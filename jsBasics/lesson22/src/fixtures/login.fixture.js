import { test as base } from '@playwright/test';
import { LoginPage, GaragePage } from '../pageObjects';
import { expect } from '@playwright/test';

export const test = base.extend({
  /**
   * @type {import('../pageObjects').GaragePage}
   */

  garagePage: async ({ page, context }, use) => {
    const garagePage = new GaragePage(page, context);
    await garagePage.navigateToPage('/panel/garage');
    await garagePage.clickAddCarButton();
    // await expect(garagePage.locators.addBtnPopup).toBeVisible()
    //await garagePage.fillInCarForm('BMW', 'X5', '555');
    await garagePage.locators.brandDrpdwn.selectOption('BMW');
    await garagePage.locators.modelDrpdwn.selectOption('X5');
    await garagePage.locators.addCarMlg.fill('555');
    await garagePage.locators.addBtnPopup.click();
    await use(garagePage);
  },

  /**
   * @type {import('../pageObjects').LoginPage}
   */
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});