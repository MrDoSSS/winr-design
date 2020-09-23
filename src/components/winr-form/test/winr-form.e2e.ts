import { newE2EPage } from '@stencil/core/testing';

describe('winr-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<winr-form></winr-form>');

    const element = await page.find('winr-form');
    expect(element).toHaveClass('hydrated');
  });
});
