import { newSpecPage } from '@stencil/core/testing';
import { WinrBtn } from '../winr-btn';

describe('winr-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WinrBtn],
      html: `<winr-btn></winr-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <winr-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </winr-btn>
    `);
  });
});
