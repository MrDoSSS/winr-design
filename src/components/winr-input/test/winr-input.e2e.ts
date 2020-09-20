import { newE2EPage } from '@stencil/core/testing';

describe('winr-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<winr-input></winr-input>');

    const element = await page.find('winr-input');
    expect(element).toHaveClass('hydrated');
  });
});
