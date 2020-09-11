import { newE2EPage } from '@stencil/core/testing';

describe('winr-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<winr-btn></winr-btn>');

    const element = await page.find('winr-btn');
    expect(element).toHaveClass('hydrated');
  });
});
