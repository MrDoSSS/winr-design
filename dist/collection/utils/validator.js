export const validators = {};
export function addValidator(name, validator) {
  validators[name] = validator;
}
