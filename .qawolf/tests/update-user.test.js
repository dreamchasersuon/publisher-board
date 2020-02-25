const { launch } = require('qawolf');
const selectors = require('../selectors/update-user');

describe('should update user and receive feedback message', () => {
  let browser;

  beforeAll(async () => {
    jest.mock('axios', () => {
      return {
        get: () => ({ status: 'OK' }),
      };
    });
    browser = await launch({ url: 'http://localhost:3000/' });
  });

  afterAll(() => browser.close());

  it('can click svg', async () => {
    await browser.click({ css: "[data-testid='popover-button']" });
  });

  it('can click "Update User" button', async () => {
    await browser.click({ css: "[data-testid='update-user']" });
  });

  it('can click "UPDATE" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });

  it('can click "X" div', async () => {
    await browser.click(selectors[13]);
  });
});
