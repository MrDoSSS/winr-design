import { Component, Host, h, Prop, State, Watch, Listen, Element } from '@stencil/core';
import { validators } from '@/utils/validator';
import { isEmpty } from '@/utils/utils';
export class WinrInput {
  constructor() {
    this.noValidate = false;
    this.innerErrors = [];
    this.updateValue = (e) => {
      this.value = e.target.value;
      this.setCustomValidity();
    };
  }
  get input() {
    return this.el.querySelector('input');
  }
  componentWillLoad() {
    this.parseValidator(this.validators);
    this.parseNative(this.native);
    this.parseErrors(this.errors);
  }
  componentDidLoad() {
    this.setCustomValidity();
  }
  componentShouldUpdate(_, oldValue, propName) {
    if (propName === 'valid')
      return oldValue !== undefined;
    return true;
  }
  parseValidator(newValue) {
    this.innerValidators = !!newValue ? JSON.parse(newValue) : {};
  }
  parseNative(newValue) {
    this.innerNative = !!newValue ? JSON.parse(newValue) : {};
  }
  parseErrors(newValue) {
    this.innerErrors = !!newValue ? JSON.parse(newValue) : [];
  }
  validate(value) {
    if (this.noValidate)
      return;
    if (isEmpty(this.innerValidators))
      return;
    if (this.validateTimeout)
      window.clearTimeout(this.validateTimeout);
    this.validateTimeout = window.setTimeout(() => {
      this.innerValidators.forEach(validator => {
        validators[validator.name].validate(value, this.el.id, validator);
      });
    }, 300);
  }
  validateResult(e) {
    this.innerErrors = e.detail || [];
  }
  setCustomValidity() {
    if (!this.input)
      return;
    this.input.setCustomValidity(this.innerErrors.join('\n'));
    this.valid = this.input.checkValidity();
  }
  render() {
    return (h(Host, { invalid: !this.valid },
      h("input", Object.assign({ placeholder: this.label, value: this.value, onInput: this.updateValue }, this.innerNative)),
      h("label", null, this.label),
      h("ul", { class: "errors" }, this.innerErrors.map(e => (h("li", null, e))))));
  }
  static get is() { return "winr-input"; }
  static get originalStyleUrls() { return {
    "$": ["winr-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["winr-input.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "noValidate": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "no-validate",
      "reflect": false,
      "defaultValue": "false"
    },
    "validators": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "validators",
      "reflect": false
    },
    "errors": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "errors",
      "reflect": false
    },
    "native": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "native",
      "reflect": false
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get states() { return {
    "valid": {},
    "innerNative": {},
    "innerErrors": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "validators",
      "methodName": "parseValidator"
    }, {
      "propName": "native",
      "methodName": "parseNative"
    }, {
      "propName": "errors",
      "methodName": "parseErrors"
    }, {
      "propName": "value",
      "methodName": "validate"
    }, {
      "propName": "innerErrors",
      "methodName": "setCustomValidity"
    }]; }
  static get listeners() { return [{
      "name": "validateResult",
      "method": "validateResult",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
