import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'winr-btn',
  styleUrl: 'winr-btn.css',
})
export class WinrBtn {
  @Prop() kind: 'primary' | 'secondary' = 'primary'
  @Prop() loading: boolean = false
  @Prop() type: 'button' | 'submit' | 'reset' = 'button'
  @Prop() disabled: boolean

  render () {
    return (
      <button
        class={{ [this.kind]: true, loading: this.loading }}
        type={this.type}
        disabled={this.disabled}
      >
        <span>
          <slot></slot>
        </span>
      </button>
    )
  }
}
