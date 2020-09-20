export type ValidateError = string

export type ValidatorOptions = {
  name: string
  [prop: string]: any
}

export type ValidateResult = {
  isValid: boolean
  errors: ValidateError[]
}

export interface Validator {
  validate (value: string, id: string, opts: ValidatorOptions): ValidateResult
}

export const validators: { [name: string]: Validator } = {}

export function addValidator (name: string, validator: Validator) {
  validators[name] = validator
}
