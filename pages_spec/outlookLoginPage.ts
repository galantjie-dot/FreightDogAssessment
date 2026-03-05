import { Page } from '@playwright/test';

export class OutlookLoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://outlook.office.com/mail');
  }

  async login(username: string, password: string) {
    if (!username || !password) {
      throw new Error('Missing credentials. Check your .env file.');
    }
 // const otherAccountButton = this.page.locator('#otherTileText');
    //await otherAccountButton.waitFor({ state: 'visible', timeout: 10000 });
   // await otherAccountButton.click();


    await this.page.fill('#i0116', username);  
    await this.page.click('#idSIButton9');
    await this.page.fill('#i0118', password);
    await this.page.click('#idSIButton9');
    const yesButton = this.page.locator('#idSIButton9', { hasText: 'Yes' });
    await yesButton.waitFor({ state: 'visible', timeout: 10000 }); 
    await yesButton.click();
  }
}

