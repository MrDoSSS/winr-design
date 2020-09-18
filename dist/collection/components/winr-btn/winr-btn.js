import { Component, h, Prop } from '@stencil/core';
export class WinrBtn {
  constructor() {
    this.loading = false;
  }
  render() {
    return (h("button", { class: { [this.type]: true, loading: this.loading } },
      h("span", null,
        h("slot", null))));
  }
  static get is() { return "winr-btn"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["winr-btn.css"]
  }; }
  static get styleUrls() { return {
    "$": ["winr-btn.css"]
  }; }
  static get properties() { return {
    "type": {
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
      "attribute": "type",
      "reflect": false
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
    }
  }; }
}
