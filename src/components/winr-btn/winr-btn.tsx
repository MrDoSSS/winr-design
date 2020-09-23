import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'winr-btn',
  styleUrl: 'winr-btn.css',
})
export class WinrBtn {
  @Prop() kind: 'primary' | 'secondary' = 'primary'
  @Prop() loading: boolean = false

  render () {
    return (
      <button class={{ [this.kind]: true, loading: this.loading }}>
        <span>
          <slot></slot>
        </span>
      </button>
    )
  }
}
