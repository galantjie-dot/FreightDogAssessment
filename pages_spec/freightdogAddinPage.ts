import { Page, Frame, expect } from '@playwright/test';

export class FreightdogAddinPage {
  private frame: Frame | null = null;   // declare the property

  constructor(private page: Page) {}


async init() {
  const iframeElement = await this.page.waitForSelector(
    'iframe[src*="freightdog"]',
    { timeout: 60000 }
  );
  this.frame = await iframeElement.contentFrame();
  if (!this.frame) {
    throw new Error('Could not get Freightdog AI iframe');
  }
}



  async processEmail() {
    if (!this.frame) {
      throw new Error('Frame not initialized. Call init() first.');
    }

    await this.frame.click('button:has-text("Process Email")');
  }

async verifySubmissionComplete() {
  if (!this.frame) throw new Error('Frame not initialized. Call init() first.');

  const messageLocator = this.frame.locator('p.css-ppre2:has-text("Reroute container – missed Munich, new POD: Barcelona")');
  await messageLocator.waitFor({ state: 'visible', timeout: 60000 });
  await expect(messageLocator).toBeVisible();
}

async goToData() {
   if (!this.frame) { 
    throw new Error('Frame not initialized. Call init() first.');
   } 
   
   await this.frame.click('button:has-text("Go to data")'); 
   await this.frame.click('role=tab[name="Data"]');
   }

}