export declare type ValidateError = string;
export declare type ValidatorOptions = {
  name: string;
  [prop: string]: any;
};
export declare type ValidateResult = {
  isValid: boolean;
  errors: ValidateError[];
};
export interface Validator {
  validate(value: string, id: string, opts: ValidatorOptions): ValidateResult;
}
export declare const validators: {
  [name: string]: Validator;
};
export declare function addValidator(name: string, validator: Validator): void;
