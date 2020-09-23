import { Component, Host, h } from '@stencil/core';
export class WinrForm {
  render() {
    return (h(Host, null,
      h("form", null,
        h("slot", null))));
  }
  static get is() { return "winr-form"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["winr-form.css"]
  }; }
  static get styleUrls() { return {
    "$": ["winr-form.css"]
  }; }
}
