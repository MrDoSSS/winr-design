import { Component, h, Listen, Element } from '@stencil/core';
export class WinrForm {
  constructor() {
    this.inputObserver = new MutationObserver(this.setValidState.bind(this));
  }
  get form() {
    return this.el.querySelector('form');
  }
  componentDidRender() {
    this.submitBtns = this.findSubmitBtns();
  }
  componentDidLoad() {
    this.setValidState();
    this.inputObserver.observe(this.el, {
      attributes: true,
      subtree: true,
      attributeFilter: ['invalid']
    });
  }
  submit() {
    this.submitBtns.forEach(btn => btn.loading = true);
  }
  findSubmitBtns() {
    return this.el.querySelectorAll('winr-btn[type=submit]');
  }
  setValidState() {
    const valid = this.form.checkValidity();
    this.submitBtns.forEach(btn => btn.disabled = !valid);
  }
  render() {
    return (h("form", null,
      h("slot", null)));
  }
  static get is() { return "winr-form"; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "submit",
      "method": "submit",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
