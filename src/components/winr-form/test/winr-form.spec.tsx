import { newSpecPage } from '@stencil/core/testing';
import { WinrForm } from '../winr-form';

describe('winr-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WinrForm],
      html: `<winr-form></winr-form>`,
    });
    expect(page.root).toEqualHtml(`
      <winr-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </winr-form>
    `);
  });
});
