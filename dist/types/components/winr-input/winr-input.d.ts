import { ValidateError, ValidatorOptions } from '@/utils/validator';
export declare class WinrInput {
  validateTimeout: number;
  innerValidators: ValidatorOptions[];
  el: HTMLWinrInputElement;
  label: string;
  noValidate: boolean;
  validators: string;
  errors: string;
  native: string;
  value: string;
  valid: boolean;
  innerNative: {
    [key: string]: string | number | boolean;
  };
  innerErrors: ValidateError[];
  updateValue: (e: InputEvent) => void;
  get input(): HTMLInputElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentShouldUpdate(_: string, oldValue: boolean, propName: string): boolean;
  parseValidator(newValue: string): void;
  parseNative(newValue: string): void;
  parseErrors(newValue: string): void;
  validate(value: string): void;
  validateResult(e: CustomEvent<ValidateError[]>): void;
  setCustomValidity(): void;
  render(): any;
}
