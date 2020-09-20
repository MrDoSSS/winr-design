'use strict';

const validators = {};
function addValidator(name, validator) {
  validators[name] = validator;
}

exports.addValidator = addValidator;
exports.validators = validators;
