const { launch } = require('qawolf');
const selectors = require('../selectors/update-balance');

describe('should update user balance', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: 'http://localhost:3000/' });
  });

  afterAll(() => browser.close());

  it('can open popover', async () => {
    await browser.click({ css: "[data-testid='popover-button']" });
  });

  it('can click "Update Balance" button', async () => {
    await browser.click({ css: "[data-testid='update-balance']" });
  });

  it('can click "amount" input', async () => {
    await browser.click({ css: "[data-testid='amount']" });
  });

  it('can show invalid message on blur', async () => {
    await browser.click(selectors[3]);
  });

  it('can click "amount" input', async () => {
    await browser.click({ css: "[data-testid='amount']" });
  });

  it('can type into "amount" input', async () => {
    await browser.type({ css: "[data-testid='amount']" }, '5000');
  });

  it('can click "comment" textarea', async () => {
    await browser.click({ css: "[data-testid='comment']" });
  });

  it('can type into "comment" textarea', async () => {
    await browser.type({ css: "[data-testid='comment']" }, 'updaye balance');
  });

  it('can click "UPDATE" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });

  it('can receive feedback message', async () => {
    await browser.click(selectors[9]);
  });
});
