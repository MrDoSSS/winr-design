import { Component, Host, h, Prop, State, Method, Event, Listen, Element } from '@stencil/core';
export class WinrModal {
  constructor() {
    this.shown = false;
  }
  async show() {
    this.shown = true;
    this.opened.emit();
  }
  async hide() {
    this.shown = false;
    this.closed.emit();
  }
  handleBackdropClick(e) {
    if (this.el !== e.composedPath()[0])
      return;
    this.hide();
  }
  render() {
    return (h(Host, { class: { shown: this.shown } },
      h("div", { class: "content" },
        h("button", { class: "close", onClick: this.hide.bind(this) }, "\u00D7"),
        h("header", null,
          h("slot", { name: "header" },
            h("h3", { class: "title" }, this.caption))),
        h("div", { class: "body" },
          h("slot", null)),
        h("footer", null,
          h("slot", { name: "footer" })))));
  }
  static get is() { return "winr-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["winr-modal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["winr-modal.css"]
  }; }
  static get properties() { return {
    "caption": {
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
      "attribute": "caption",
      "reflect": false
    }
  }; }
  static get states() { return {
    "shown": {}
  }; }
  static get events() { return [{
      "method": "opened",
      "name": "opened",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "closed",
      "name": "closed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleBackdropClick",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
