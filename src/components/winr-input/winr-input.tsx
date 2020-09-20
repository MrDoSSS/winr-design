import { Component, Host, h, Prop, State, Watch, Listen, Element } from '@stencil/core'
import { validators, ValidateError, ValidatorOptions } from '@/utils/validator'

@Component({
  tag: 'winr-input',
  styleUrl: 'winr-input.css',
  shadow: true,
})
export class WinrInput {
  validateTimeout: number

  @Prop() label!: string
  @Prop() validable: boolean = false
  @Prop() validator: string

  @State() innerValidator: ValidatorOptions
  @State() value: string
  @State() errors: ValidateError[] = []

  @Element() el: HTMLElement

  componentWillLoad () {
    this.parseValidator(this.validator)
  }

  @Watch('validator')
  parseValidator (newValue: string) {
    if (newValue) this.innerValidator = JSON.parse(newValue)
  }

  updateValue (e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value
  }

  @Watch('value')
  validate (value: string) {
    if (!this.validable) return

    this.validateTimeout = window.setTimeout(() => {
      if (this.validateTimeout) window.clearTimeout(this.validateTimeout)

      validators[this.innerValidator.name].validate(value, this.el.id, this.innerValidator)
    }, 300)
  }

  @Listen('validateResult')
  validateResult (e: CustomEvent<ValidateError[]>) {
    console.log(e)
    this.errors = e.detail
  }

  render () {
    return (
      <Host>
        <input placeholder={this.label} value={this.value} onInput={(e: InputEvent) => this.updateValue(e)} />
        <label >{this.label}</label>
        <ul class="errors">
          {this.errors.map(e => <li>{e}</li>)}
        </ul>
      </Host>
    )
  }
}
