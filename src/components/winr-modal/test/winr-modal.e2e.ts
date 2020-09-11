import { newE2EPage } from '@stencil/core/testing'

describe('winr-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<winr-modal></winr-modal>')

    const element = await page.find('winr-modal')
    expect(element).toHaveClass('hydrated')
  })
})
