const { launch } = require('qawolf');
const selectors = require('../selectors/update-user');

describe('update-user', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: 'http://localhost:3000/' });
  });

  afterAll(() => browser.close());

  it('can open popover', async () => {
    await browser.click({ css: "[data-testid='popover-button']" });
  });

  it('can click "Update User" button', async () => {
    await browser.click({ css: "[data-testid='update-user']" });
  });

  it('can click "name" input', async () => {
    await browser.click({ css: "[data-testid='update-name']" });
  });

  it('can change name', async () => {
    await browser.type(
      { css: "[data-testid='update-name']" },
      '↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace',
    );
  });

  it('can click "custom" input', async () => {
    await browser.click({ css: "[data-testid='update-custom']" });
  });

  it('can change custom param', async () => {
    await browser.type(
      { css: "[data-testid='update-custom']" },
      '↓ShiftLeft↓Minus↑Minus↑ShiftLeft↓KeyW↑KeyW↓KeyO↑KeyO↓KeyR↑KeyR↓KeyL↑KeyL↓KeyS↑KeyS↓Backspace↓KeyD↑Backspace↑KeyD',
    );
  });

  it('can click "UPDATE" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });

  it('can show updated param', async () => {
    await browser.click(selectors[7]);
  });

  it('can click "jhlkjohn.smith_" div', async () => {
    await browser.click(selectors[8]);
  });

  it('can receive feedback message', async () => {
    await browser.click(selectors[9]);
  });
});
