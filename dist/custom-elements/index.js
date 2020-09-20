import { attachShadow, h, Host, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const validators = {};
function addValidator(name, validator) {
  validators[name] = validator;
}

const winrBtnCss = ":host{display:inline-block}";

const WinrBtn = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.type = 'primary';
    this.loading = false;
  }
  render() {
    return (h("button", { class: { [this.type]: true, loading: this.loading } }, h("span", null, h("slot", null))));
  }
  static get style() { return winrBtnCss; }
};

const winrInputCss = ":host{display:block;position:relative;--paddint-top:1.25rem}input{padding:var(--paddint-top) 0 0.25rem;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:1px solid #ced4da;outline:none;appearance:none;transition:border-color 0.15s ease-in-out}input::placeholder{opacity:0}label{padding-top:calc(var(--paddint-top) + 0.2rem);position:absolute;top:0;left:0;display:block;width:100%;color:#495057;pointer-events:none;cursor:text;border-left:1px solid transparent;transition:padding 0.1s ease-in-out, font-size 0.1s ease-in-out;box-sizing:border-box}input:not(:placeholder-shown)~label{padding-top:0.5rem;font-size:0.75rem;border:none;color:#777}.errors{list-style:none;margin:0.3rem 0 0;padding:0}";

const WinrInput = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
    return (h(Host, null, h("input", { placeholder: this.label, value: this.value, onInput: (e) => this.updateValue(e) }), h("label", null, this.label), h("ul", { class: "errors" }, this.errors.map(e => h("li", null, e)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "validator": ["parseValidator"],
    "value": ["validate"]
  }; }
  static get style() { return winrInputCss; }
};

const winrModalCss = ":host{display:none;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3);z-index:1000}:host(.shown){display:block}.content{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:white;box-shadow:0 12px 34px 0 rgba(0, 0, 0, 0.22);padding:40px 36px 68px;width:788px;border-radius:4px;max-height:95%}.title{margin:0 0 36px;font-size:28px}.close{position:absolute;top:22px;right:22px;min-width:36px;min-height:36px;border-radius:50%;background-color:#edece8;padding:0;font-size:14px}.body{margin-bottom:50px}";

const WinrModal = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.opened = createEvent(this, "opened", 7);
    this.closed = createEvent(this, "closed", 7);
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
    return (h(Host, { class: { shown: this.shown } }, h("div", { class: "content" }, h("button", { class: "close", onClick: this.hide.bind(this) }, "\u00D7"), h("header", null, h("slot", { name: "header" }, h("h3", { class: "title" }, this.caption))), h("div", { class: "body" }, h("slot", null)), h("footer", null, h("slot", { name: "footer" })))));
  }
  get el() { return this; }
  static get style() { return winrModalCss; }
};

const WinrBtn$1 = /*@__PURE__*/proxyCustomElement(WinrBtn, [1,"winr-btn",{"type":[1],"loading":[4]}]);
const WinrInput$1 = /*@__PURE__*/proxyCustomElement(WinrInput, [1,"winr-input",{"label":[1],"validable":[4],"validator":[1],"innerValidator":[32],"value":[32],"errors":[32]},[[0,"validateResult","validateResult"]]]);
const WinrModal$1 = /*@__PURE__*/proxyCustomElement(WinrModal, [1,"winr-modal",{"caption":[1],"shown":[32]},[[2,"click","handleBackdropClick"]]]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      WinrBtn$1,
  WinrInput$1,
  WinrModal$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { WinrBtn$1 as WinrBtn, WinrInput$1 as WinrInput, WinrModal$1 as WinrModal, addValidator, defineCustomElements, validators };
