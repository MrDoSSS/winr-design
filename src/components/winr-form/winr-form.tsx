import { Component, h, Listen, Element, Host } from '@stencil/core'

@Component({
  tag: 'winr-form',
})
export class WinrForm {
  submitBtns: NodeListOf<HTMLWinrBtnElement>
  inputObserver = new MutationObserver(this.setValidState.bind(this))

  @Element() el: HTMLWinrFormElement

  get form() {
    return this.el.querySelector('form')
  }

  componentDidRender() {
    this.submitBtns = this.findSubmitBtns()
  }

  componentDidLoad() {
    this.setValidState()

    this.inputObserver.observe(this.el, {
      attributes: true,
      subtree: true,
      attributeFilter: ['invalid'],
    })
  }

  @Listen('submit', { capture: true })
  submit() {
    this.submitBtns.forEach(btn => (btn.loading = true))
  }

  findSubmitBtns() {
    return this.el.querySelectorAll<HTMLWinrBtnElement>('winr-btn[type=submit]')
  }

  setValidState() {
    const valid = this.form.checkValidity()

    this.submitBtns.forEach(btn => (btn.disabled = !valid))
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
