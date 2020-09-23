import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'winr-form',
  styleUrl: 'winr-form.css',
  shadow: true,
})
export class WinrForm {

  render () {
    return (
      <Host>
        <form>
          <slot></slot>
        </form>
      </Host>
    )
  }

}
