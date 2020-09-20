const validators = {};
function addValidator(name, validator) {
  validators[name] = validator;
}

export { addValidator as a, validators as v };
