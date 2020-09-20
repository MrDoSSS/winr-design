import { ValidateError, ValidatorOptions } from '@/utils/validator';
export declare class WinrInput {
  validateTimeout: number;
  label: string;
  validable: boolean;
  validator: string;
  innerValidator: ValidatorOptions;
  value: string;
  errors: ValidateError[];
  el: HTMLElement;
  componentWillLoad(): void;
  parseValidator(newValue: string): void;
  updateValue(e: InputEvent): void;
  validate(value: string): void;
  validateResult(errors: ValidateError[]): void;
  render(): any;
}
