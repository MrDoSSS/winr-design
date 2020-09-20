import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './index-fec29c76.js';
import { v as validators } from './validator-a7a086e8.js';

const winrBtnCss = ":host{display:inline-block}";

const WinrBtn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'primary';
    this.loading = false;
  }
  render() {
    return (h("button", { class: { [this.type]: true, loading: this.loading } }, h("span", null, h("slot", null))));
  }
};
WinrBtn.style = winrBtnCss;

const winrInputCss = ":host{display:block;position:relative;--paddint-top:1.25rem}input{padding:var(--paddint-top) 0 0.25rem;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:1px solid #ced4da;outline:none;appearance:none;transition:border-color 0.15s ease-in-out}input::placeholder{opacity:0}label{padding-top:calc(var(--paddint-top) + 0.2rem);position:absolute;top:0;left:0;display:block;width:100%;color:#495057;pointer-events:none;cursor:text;border-left:1px solid transparent;transition:padding 0.1s ease-in-out, font-size 0.1s ease-in-out;box-sizing:border-box}input:not(:placeholder-shown)~label{padding-top:0.5rem;font-size:0.75rem;border:none;color:#777}.errors{list-style:none;margin:0.3rem 0 0;padding:0}";

const WinrInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    this.errors = e.detail;
  }
  render() {
    return (h(Host, null, h("input", { placeholder: this.label, value: this.value, onInput: (e) => this.updateValue(e) }), h("label", null, this.label), h("ul", { class: "errors" }, this.errors.map(e => h("li", null, e)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "validator": ["parseValidator"],
    "value": ["validate"]
  }; }
};
WinrInput.style = winrInputCss;

const winrModalCss = ":host{display:none;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3);z-index:1000}:host(.shown){display:block}.content{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:white;box-shadow:0 12px 34px 0 rgba(0, 0, 0, 0.22);padding:40px 36px 68px;width:788px;border-radius:4px;max-height:95%}.title{margin:0 0 36px;font-size:28px}.close{position:absolute;top:22px;right:22px;min-width:36px;min-height:36px;border-radius:50%;background-color:#edece8;padding:0;font-size:14px}.body{margin-bottom:50px}";

const WinrModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
WinrModal.style = winrModalCss;

export { WinrBtn as winr_btn, WinrInput as winr_input, WinrModal as winr_modal };
