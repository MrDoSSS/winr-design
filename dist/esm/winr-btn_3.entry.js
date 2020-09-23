import { r as registerInstance, h, H as Host, g as getElement } from './index-bfc0f1d7.js';
import { v as validators } from './validator-a7a086e8.js';

const winrBtnCss = ":host{display:inline-block}";

const WinrBtn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.kind = 'primary';
    this.loading = false;
  }
  render() {
    return (h("button", { class: { [this.kind]: true, loading: this.loading } }, h("span", null, h("slot", null))));
  }
};
WinrBtn.style = winrBtnCss;

const winrFormCss = ":host{display:block}";

const WinrForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("form", null, h("slot", null))));
  }
};
WinrForm.style = winrFormCss;

const winrInputCss = ":host{display:block;position:relative;--paddint-top:1.25rem}input{padding:var(--paddint-top) 0 0.25rem;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:0.05rem solid #ced4da;outline:none;appearance:none;transition:border-color 0.15s ease-in-out}input::placeholder{opacity:0}label{padding-top:calc(var(--paddint-top) + 0.2rem);position:absolute;top:0;left:0;display:block;font-size:1rem;line-height:1em;width:100%;color:#495057;pointer-events:none;cursor:text;border-left:0.01rem solid transparent;transition:padding 0.1s ease-in-out, font-size 0.1s ease-in-out;box-sizing:border-box}input:not(:placeholder-shown)~label{padding-top:0.5rem;font-size:0.75rem;border:none;color:#777}.errors{list-style:none;margin:0.3rem 0 0;padding:0}";

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
    if (this.validateTimeout)
      window.clearTimeout(this.validateTimeout);
    this.validateTimeout = window.setTimeout(() => {
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

export { WinrBtn as winr_btn, WinrForm as winr_form, WinrInput as winr_input };
