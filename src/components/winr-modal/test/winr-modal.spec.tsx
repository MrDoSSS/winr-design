import { newSpecPage } from '@stencil/core/testing'
import { WinrModal } from '../winr-modal'

describe('winr-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WinrModal],
      html: `<winr-modal></winr-modal>`,
    })
    expect(page.root).toEqualHtml(`
      <winr-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </winr-modal>
    `)
  })
})
