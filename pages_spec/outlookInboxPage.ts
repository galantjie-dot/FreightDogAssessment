import { Page } from '@playwright/test';

export class OutlookInboxPage {
  constructor(private page: Page) {}


  async openFirstEmail() {
    await this.page.waitForSelector('[role="listbox"]');
    const firstEmail = this.page.locator('[role="listbox"] [role="option"]').first();
    await firstEmail.click();
   
     
    }

    async openFreightdogAddin() { 
      // Click the add-in menu item by aria-label 
      await this.page.click('div[role="menuitem"][aria-label^="Freightdog AI"]'); 
  

}

}




