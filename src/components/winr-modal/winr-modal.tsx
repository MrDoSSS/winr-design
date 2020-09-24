import { Component, Host, h, Prop, State, Method, Event, EventEmitter, Listen, Element } from '@stencil/core'

@Component({
  tag: 'winr-modal',
  styleUrl: 'winr-modal.css',
  shadow: true,
})
export class WinrModal {
  @Prop() caption: string
  @State() shown: boolean = false
  @Event() opened: EventEmitter<void>
  @Event() closed: EventEmitter<void>
  @Element() el: HTMLElement

  @Method()
  async show () {
    this.shown = true
    this.opened.emit()
  }

  @Method()
  async hide () {
    this.shown = false
    this.closed.emit()
  }

  @Listen('click', { capture: true })
  handleBackdropClick (e: MouseEvent) {
    if (this.el !== e.composedPath()[0]) return

    this.hide()
  }

  render () {
    return (
      <Host class={{ shown: this.shown }}>
        <div class="content">
          <button class="close" onClick={this.hide.bind(this)}>
            &times;
          </button>
          <header>
            <slot name="header">
              <h3 class="title">{this.caption}</h3>
            </slot>
          </header>
          <div class="body">
            <slot></slot>
          </div>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </Host>
    )
  }
}
