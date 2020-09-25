import { Component, h, Listen, Element, State, Prop, Watch } from '@stencil/core';
export class WinrForm {
  constructor() {
    this.inputObserver = new MutationObserver(this.setValidState.bind(this));
  }
  get form() {
    return this.el.querySelector('form');
  }
  componentWillLoad() {
    this.parseNative(this.native);
  }
  componentDidRender() {
    this.submitBtns = this.findSubmitBtns();
  }
  componentDidLoad() {
    this.setValidState();
    this.inputObserver.observe(this.el, {
      attributes: true,
      subtree: true,
      attributeFilter: ['invalid'],
    });
  }
  parseNative(newValue) {
    if (newValue)
      this.innerNative = JSON.parse(newValue);
  }
  submit() {
    this.submitBtns.forEach(btn => (btn.loading = true));
  }
  findSubmitBtns() {
    return this.el.querySelectorAll('winr-btn[type=submit]');
  }
  setValidState() {
    const valid = this.form.checkValidity();
    this.submitBtns.forEach(btn => (btn.disabled = !valid));
  }
  render() {
    return (h("form", Object.assign({}, this.innerNative),
      h("slot", null)));
  }
  static get is() { return "winr-form"; }
  static get properties() { return {
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
    }
  }; }
  static get states() { return {
    "innerNative": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "native",
      "methodName": "parseNative"
    }]; }
  static get listeners() { return [{
      "name": "submit",
      "method": "submit",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
