const { launch } = require('qawolf');
const selectors = require('../selectors/get-transactions');

describe('should get transactions for period 12.02.2020 - 23.02.2020 from first user', () => {
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
    await browser.type(
      { css: "[data-testid='dateFrom']" },
      '↓Digit1↓Digit2↑Digit1↑Digit2↓Digit0↓Digit2↑Digit0↑Digit2↓Digit1↑Digit1↓Digit2↑Digit2↓Backspace↑Backspace↓Backspace↑Backspace↓Digit2↑Digit2↓Digit0↑Digit0↓Digit2↓Digit0↑Digit2↑Digit0',
    );
  });

  it('can click "dateTo" input', async () => {
    await browser.click({ css: "[data-testid='dateTo']" });
  });

  it('can type into "dateTo" input', async () => {
    await browser.type({ css: "[data-testid='dateTo']" }, '23022020');
  });

  it('can click "GET" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });

  it('can click "CLOSE" button', async () => {
    await browser.click(selectors[7]);
  });
});
