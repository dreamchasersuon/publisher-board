const { launch } = require('qawolf');
const selectors = require('../selectors/add-user');

describe('should add user with valid email', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: 'http://localhost:3000/' });
  });

  afterAll(() => browser.close());

  it('can click "Add" button', async () => {
    await browser.click(selectors[1]);
  });

  it('can click "name" input', async () => {
    await browser.click({ css: "[data-testid='name']" });
  });

  it('can type into "name" input', async () => {
    await browser.type({ css: "[data-testid='name']" }, 'Malkovich');
  });

  it('can click "email" input', async () => {
    await browser.click({ css: "[data-testid='email']" });
  });

  it('can type into "email" input', async () => {
    await browser.type({ css: "[data-testid='email']" }, 'john@..');
  });

  it('can click "custom" input', async () => {
    await browser.click({ css: "[data-testid='custom']" });
  });

  it('can click "email" input', async () => {
    await browser.click({ css: "[data-testid='email']" });
  });

  it('can type into "email" input', async () => {
    await browser.type(
      { css: "[data-testid='email']" },
      '↓Backspace↑Backspace↓Backspace↑Backspace↓KeyF↑KeyF↓KeyA↑KeyA↓KeyM↑KeyM↓KeyO↑KeyO↓KeyU↑KeyU↓KeyS↑KeyS↓Period↑Period↓KeyC↓KeyO↑KeyC↑KeyO↓KeyM↑KeyM',
    );
  });

  it('can click "custom" input', async () => {
    await browser.click({ css: "[data-testid='custom']" });
  });

  it('can type into "custom" input', async () => {
    await browser.type({ css: "[data-testid='custom']" }, 'null');
  });

  it('can click "ADD" button', async () => {
    await browser.click({ css: "[data-testid='modal-perform']" });
  });

  it('can click "X" div', async () => {
    await browser.click(selectors[12]);
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[13], { x: 0, y: 206 });
  });
});
