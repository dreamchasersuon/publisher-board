/*
const { launch } = require('qawolf');

const selectors = require('../selectors/get-transactions');

describe('should get transactions and receive feedback message', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: 'http://localhost:3000/' });
  });

  afterAll(() => browser.close());

  it('can click svg', async () => {
    await browser.click({ css: "[data-testid='popover-button']" });
  });

  it('can click "Get Transactions" button', async () => {
    await browser.click({ css: "[data-testid='get-transactions']" });
  });

  it('can click "dateFrom" input', async () => {
    await browser.click({ css: "[data-testid='dateFrom']" });
  });

  it('can type into "dateFrom" input', async () => {
    await browser.type({ css: "[data-testid='dateFrom']" }, '2020-01-02');
  });

  it('can click "dateTo" input', async () => {
    await browser.click({ css: "[data-testid='dateTo']" });
  });

  it('can type into "dateTo" input', async () => {
    await browser.type({ css: "[data-testid='dateTo']" }, '2020-02-03');
  });

  it('can click "GET" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[15], { x: 0, y: 70 });
  });
});
*/
