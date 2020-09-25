import { Component, h, Listen, Element, State, Prop, Watch } from '@stencil/core'

@Component({
  tag: 'winr-form',
})
export class WinrForm {
  submitBtns: NodeListOf<HTMLWinrBtnElement>
  inputObserver = new MutationObserver(this.setValidState.bind(this))

  @Prop() native: string

  @Element() el: HTMLWinrFormElement
  @State() innerNative: { [key: string]: string | number | boolean }

  get form() {
    return this.el.querySelector('form')
  }

  componentWillLoad() {
    this.parseNative(this.native)
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

  @Watch('native')
  parseNative(newValue: string) {
    if (newValue) this.innerNative = JSON.parse(newValue)
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
      <form {...this.innerNative}>
        <slot></slot>
      </form>
    )
  }
}
