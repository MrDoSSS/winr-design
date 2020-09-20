import { newSpecPage } from '@stencil/core/testing';
import { WinrInput } from '../winr-input';

describe('winr-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WinrInput],
      html: `<winr-input></winr-input>`,
    });
    expect(page.root).toEqualHtml(`
      <winr-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </winr-input>
    `);
  });
});
