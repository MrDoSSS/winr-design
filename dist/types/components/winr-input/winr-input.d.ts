import { ValidateError, ValidatorOptions } from '@/utils/validator';
export declare class WinrInput {
  validateTimeout: number;
  innerValidators: ValidatorOptions[];
  el: HTMLWinrInputElement;
  label: string;
  noValidate: boolean;
  validators: string;
  errors: string;
  inputAttrs: string;
  value: string;
  valid: boolean;
  innerInputAttrs: {
    [key: string]: string | number | boolean;
  };
  innerErrors: ValidateError[];
  updateValue: (e: InputEvent) => void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentShouldUpdate(_: string, oldValue: boolean, propName: string): boolean;
  parseValidator(newValue: string): void;
  parseInputAttrs(newValue: string): void;
  parseErrors(newValue: string): void;
  validate(value: string): void;
  validateResult(e: CustomEvent<ValidateError[]>): void;
  setCustomValidity(): void;
  get input(): HTMLInputElement;
  render(): any;
}
