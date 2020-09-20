import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'winr-btn',
  styleUrl: 'winr-btn.css',
  shadow: true,
})
export class WinrBtn {
  @Prop() type: 'primary' | 'secondary' = 'primary'
  @Prop() loading: boolean = false

  render () {
    return (
      <button class={{ [this.type]: true, loading: this.loading }}>
        <span>
          <slot></slot>
        </span>
      </button>
    )
  }
}
