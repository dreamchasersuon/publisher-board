const { launch } = require('qawolf');
const selectors = require('../selectors/update-balance');

describe('update-balance', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: 'https://update-balance/' });
  });

  afterAll(() => browser.close());

  it('can click popover button', async () => {
    await browser.click({ css: "[data-testid='popover-button']" });
  });

  it('can click "Update Balance" button', async () => {
    await browser.click({ css: "[data-testid='update-balance']" });
  });

  it('can click "balance" input', async () => {
    await browser.click({ css: "[data-testid='balance']" });
  });

  it('can type into "balance" input', async () => {
    await browser.type({ css: "[data-testid='balance']" }, '5000');
  });

  it('can click "UPDATE" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });
});
