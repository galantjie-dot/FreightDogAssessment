test.setTimeout(60000); // 
import { test } from '@playwright/test';
import { OutlookLoginPage } from '../pages_spec/outlookLoginPage';
import { OutlookInboxPage } from '../pages_spec/outlookInboxPage';
import { FreightdogAddinPage } from '../pages_spec/freightdogAddinPage';
import dotenv from 'dotenv';
dotenv.config();


test('Process email and observe lifecycle in Freightdog AI', async ({ page }) => {
  const loginPage = new OutlookLoginPage(page);
  const inboxPage = new OutlookInboxPage(page);
  const addinPage = new FreightdogAddinPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.OUTLOOK_USER!, process.env.OUTLOOK_PASS!);
  await inboxPage.openFirstEmail();
  await inboxPage.openFreightdogAddin();
  await addinPage.init();
  await addinPage.processEmail();
  await addinPage.verifySubmissionComplete();
  await addinPage.goToData();

});
