import { Component, Host, h, Prop, State, Watch, Listen, Element } from '@stencil/core';
import { validators } from '@/utils/validator';
export class WinrInput {
  constructor() {
    this.validable = false;
    this.errors = [];
  }
  componentWillLoad() {
    this.parseValidator(this.validator);
  }
  parseValidator(newValue) {
    if (newValue)
      this.innerValidator = JSON.parse(newValue);
  }
  updateValue(e) {
    this.value = e.target.value;
  }
  validate(value) {
    if (!this.validable)
      return;
    this.validateTimeout = window.setTimeout(() => {
      if (this.validateTimeout)
        window.clearTimeout(this.validateTimeout);
      validators[this.innerValidator.name].validate(value, this.el.id, this.innerValidator);
    }, 300);
  }
  validateResult(e) {
    console.log(e);
    this.errors = e.detail;
  }
  render() {
    return (h(Host, null,
      h("input", { placeholder: this.label, value: this.value, onInput: (e) => this.updateValue(e) }),
      h("label", null, this.label),
      h("ul", { class: "errors" }, this.errors.map(e => h("li", null, e)))));
  }
  static get is() { return "winr-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["winr-input.css"]
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
    "validable": {
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
      "attribute": "validable",
      "reflect": false,
      "defaultValue": "false"
    },
    "validator": {
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
      "attribute": "validator",
      "reflect": false
    }
  }; }
  static get states() { return {
    "innerValidator": {},
    "value": {},
    "errors": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "validator",
      "methodName": "parseValidator"
    }, {
      "propName": "value",
      "methodName": "validate"
    }]; }
  static get listeners() { return [{
      "name": "validateResult",
      "method": "validateResult",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
