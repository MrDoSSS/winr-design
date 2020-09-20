export declare type ValidateError = string;
export declare type ValidatorOptions = {
  name: string;
  [prop: string]: any;
};
export interface Validator {
  validate(value: string, id: string, opts: ValidatorOptions): void;
}
export declare const validators: {
  [name: string]: Validator;
};
export declare function addValidator(name: string, validator: Validator): void;
