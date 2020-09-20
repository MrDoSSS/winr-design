export type ValidateError = string

export type ValidatorOptions = {
  name: string
  [prop: string]: any
}

export interface Validator {
  validate (value: string, id: string, opts: ValidatorOptions): void
}

export const validators: { [name: string]: Validator } = {}

export function addValidator (name: string, validator: Validator) {
  validators[name] = validator
}
