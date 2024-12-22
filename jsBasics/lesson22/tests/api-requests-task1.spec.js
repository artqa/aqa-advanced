import { test, expect } from '@playwright/test';

test('Update profile request', { tag: '@profile' }, async({ browser }) => {
    
    const context = await browser.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
    const page = await context.newPage();
    await page.route('**/api/users/profile', async (route, request) => {
        console.log('request.method()',request.method())
        if(request.method() === 'GET'){
          const response = await route.fetch();
          const json = await response.json();
          json.data = {
            "userId": 159611,
            "photoFilename": "default-user.png",
            "name": "Tolya",
            "lastName": "Pyrizhok"
        }
        console.log('Mocked Response:', JSON.stringify(json));
          await route.fulfill({
            response,
            json
          });
        } else {
         route.continue()
        }
      });

      await page.goto('https://qauto.forstudy.space/panel/profile');
      
      const profileNameLocator = page.locator('p.profile_name');
      await profileNameLocator.waitFor({ state: 'visible' });

      const profileNameText = await profileNameLocator.textContent();
      expect(profileNameText).toBe('Tolya Pyrizhok');
  })