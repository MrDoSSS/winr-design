import { Component, h, Prop } from '@stencil/core';
export class WinrBtn {
  constructor() {
    this.kind = 'primary';
    this.loading = false;
    this.type = 'button';
  }
  render() {
    return (h("button", { class: { [this.kind]: true, loading: this.loading }, type: this.type, disabled: this.disabled },
      h("span", null,
        h("slot", null))));
  }
  static get is() { return "winr-btn"; }
  static get originalStyleUrls() { return {
    "$": ["winr-btn.css"]
  }; }
  static get styleUrls() { return {
    "$": ["winr-btn.css"]
  }; }
  static get properties() { return {
    "kind": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary'",
        "resolved": "\"primary\" | \"secondary\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "kind",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "loading": {
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
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'submit' | 'reset'",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false
    }
  }; }
}
