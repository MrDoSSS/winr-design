import { Component, Host, h, Prop, State, Watch, Listen, Element } from '@stencil/core'
import { validators, ValidateError, ValidatorOptions } from '@/utils/validator'
import { isEmpty } from '@/utils/utils'

@Component({
  tag: 'winr-input',
  styleUrl: 'winr-input.scss'
})
export class WinrInput {
  validateTimeout: number
  innerValidators: ValidatorOptions[]

  @Element() el: HTMLWinrInputElement

  @Prop() label!: string
  @Prop() noValidate: boolean = false
  @Prop() validators: string
  @Prop() errors: string
  @Prop() inputAttrs: string
  @Prop({ mutable: true }) value: string

  @State() valid: boolean
  @State() innerInputAttrs: { [key: string]: string | number | boolean }
  @State() innerErrors: ValidateError[] = []

  updateValue = (e: InputEvent) => {
    this.value = (e.target as HTMLInputElement).value
    this.setCustomValidity()
  }

  componentWillLoad () {
    this.parseValidator(this.validators)
    this.parseInputAttrs(this.inputAttrs)
    this.parseErrors(this.errors)
  }

  componentDidLoad () {
    this.setCustomValidity()
  }

  componentShouldUpdate (_: string, oldValue: boolean, propName: string) {
    if (propName === 'valid') return oldValue !== undefined

    return true
  }

  @Watch('validators')
  parseValidator (newValue: string) {
    if (newValue) this.innerValidators = JSON.parse(newValue)
  }

  @Watch('inputAttrs')
  parseInputAttrs (newValue: string) {
    if (newValue) this.innerInputAttrs = JSON.parse(newValue)
  }

  @Watch('errors')
  parseErrors (newValue: string) {
    if (newValue) this.innerErrors = JSON.parse(newValue)
  }



  @Watch('value')
  validate (value: string) {
    if (this.noValidate) return
    if (isEmpty(this.innerValidators)) return
    if (this.validateTimeout) window.clearTimeout(this.validateTimeout)

    this.validateTimeout = window.setTimeout(() => {
      this.innerValidators.forEach(validator => {
        validators[validator.name].validate(value, this.el.id, validator)
      })
    }, 300)
  }

  @Listen('validateResult')
  validateResult (e: CustomEvent<ValidateError[]>) {
    this.innerErrors = e.detail || []
  }

  @Watch('innerErrors')
  setCustomValidity () {
    this.input.setCustomValidity(this.innerErrors.join('\n'))
    this.valid = this.input.checkValidity()
  }

  get input () {
    return this.el.querySelector('input')
  }

  render () {
    return (
      <Host invalid={!this.valid}>
        <input
          placeholder={this.label}
          value={this.value}
          onInput={this.updateValue}
          {...this.innerInputAttrs}
        />
        <label >{this.label}</label>
        <ul class="errors">
          {this.innerErrors.map(e => <li>{e}</li>)}
        </ul>
      </Host>
    )
  }
}
