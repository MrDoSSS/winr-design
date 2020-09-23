'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-20cc980c.js');
const validator = require('./validator-b518d496.js');

const winrBtnCss = ":host{display:inline-block}";

const WinrBtn = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.kind = 'primary';
    this.loading = false;
  }
  render() {
    return (index.h("button", { class: { [this.kind]: true, loading: this.loading } }, index.h("span", null, index.h("slot", null))));
  }
};
WinrBtn.style = winrBtnCss;

const winrFormCss = ":host{display:block}";

const WinrForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("form", null, index.h("slot", null))));
  }
};
WinrForm.style = winrFormCss;

const winrInputCss = ":host{display:block;position:relative;--paddint-top:1.25rem}input{padding:var(--paddint-top) 0 0.25rem;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:0.05rem solid #ced4da;outline:none;appearance:none;transition:border-color 0.15s ease-in-out}input::placeholder{opacity:0}label{padding-top:calc(var(--paddint-top) + 0.2rem);position:absolute;top:0;left:0;display:block;font-size:1rem;line-height:1em;width:100%;color:#495057;pointer-events:none;cursor:text;border-left:0.01rem solid transparent;transition:padding 0.1s ease-in-out, font-size 0.1s ease-in-out;box-sizing:border-box}input:not(:placeholder-shown)~label{padding-top:0.5rem;font-size:0.75rem;border:none;color:#777}.errors{list-style:none;margin:0.3rem 0 0;padding:0}";

const WinrInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      validator.validators[this.innerValidator.name].validate(value, this.el.id, this.innerValidator);
    }, 300);
  }
  validateResult(e) {
    this.errors = e.detail;
  }
  render() {
    return (index.h(index.Host, null, index.h("input", { placeholder: this.label, value: this.value, onInput: (e) => this.updateValue(e) }), index.h("label", null, this.label), index.h("ul", { class: "errors" }, this.errors.map(e => index.h("li", null, e)))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "validator": ["parseValidator"],
    "value": ["validate"]
  }; }
};
WinrInput.style = winrInputCss;

exports.winr_btn = WinrBtn;
exports.winr_form = WinrForm;
exports.winr_input = WinrInput;
