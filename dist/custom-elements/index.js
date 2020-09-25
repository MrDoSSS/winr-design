import { h, Host, attachShadow, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
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
    this.kind = 'primary';
    this.loading = false;
    this.type = 'button';
  }
  render() {
    return (h("button", { class: { [this.kind]: true, loading: this.loading }, type: this.type, disabled: this.disabled }, h("span", null, h("slot", null))));
  }
  static get style() { return winrBtnCss; }
};

const WinrForm = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
      attributeFilter: ['invalid'],
    });
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
    return (h(Host, null, h("slot", null)));
  }
  get el() { return this; }
};

function isEmpty(value) {
  return value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);
}

const winrInputCss = "winr-input{display:block;position:relative;--paddint-top:1.25rem}winr-input input{padding:var(--paddint-top) 0 0.25rem;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:0.05rem solid #ced4da;outline:none;appearance:none;transition:border-color 0.15s ease-in-out}winr-input input::placeholder{opacity:0}winr-input input:not(:placeholder-shown)~label{padding-top:0.5rem;font-size:0.75rem;border:none;color:#777}winr-input[errors] input,winr-input input:not(:placeholder-shown):invalid{border-bottom-color:var(--wds__error-color)}winr-input label{padding-top:calc(var(--paddint-top) + 0.2rem);position:absolute;top:0;left:0;display:block;font-size:1rem;line-height:1em;width:100%;color:#495057;pointer-events:none;cursor:text;border-left:0.01rem solid transparent;transition:padding 0.1s ease-in-out, font-size 0.1s ease-in-out;box-sizing:border-box}winr-input ul.errors{list-style:none;margin:0.3rem 0 0;padding:0;color:var(--wds__error-color)}winr-input ul.errors li{padding-left:0}winr-input ul.errors li::before{display:none}";

const WinrInput = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.noValidate = false;
    this.innerErrors = [];
    this.updateValue = (e) => {
      this.value = e.target.value;
      this.setCustomValidity();
    };
  }
  get input() {
    return this.el.querySelector('input');
  }
  componentWillLoad() {
    this.parseValidator(this.validators);
    this.parseNative(this.native);
    this.parseErrors(this.errors);
  }
  componentDidLoad() {
    this.setCustomValidity();
  }
  componentShouldUpdate(_, oldValue, propName) {
    if (propName === 'valid')
      return oldValue !== undefined;
    return true;
  }
  parseValidator(newValue) {
    this.innerValidators = !!newValue ? JSON.parse(newValue) : {};
  }
  parseNative(newValue) {
    this.innerNative = !!newValue ? JSON.parse(newValue) : {};
  }
  parseErrors(newValue) {
    this.innerErrors = !!newValue ? JSON.parse(newValue) : [];
  }
  validate(value) {
    if (this.noValidate)
      return;
    if (isEmpty(this.innerValidators))
      return;
    if (this.validateTimeout)
      window.clearTimeout(this.validateTimeout);
    this.validateTimeout = window.setTimeout(() => {
      this.innerValidators.forEach(validator => {
        validators[validator.name].validate(value, this.el.id, validator);
      });
    }, 300);
  }
  validateResult(e) {
    this.innerErrors = e.detail || [];
  }
  setCustomValidity() {
    if (!this.input)
      return;
    this.input.setCustomValidity(this.innerErrors.join('\n'));
    this.valid = this.input.checkValidity();
  }
  render() {
    return (h(Host, { invalid: !this.valid }, h("input", Object.assign({ placeholder: this.label, value: this.value, onInput: this.updateValue }, this.innerNative)), h("label", null, this.label), h("ul", { class: "errors" }, this.innerErrors.map(e => (h("li", null, e))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "validators": ["parseValidator"],
    "native": ["parseNative"],
    "errors": ["parseErrors"],
    "value": ["validate"],
    "innerErrors": ["setCustomValidity"]
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

const WinrBtn$1 = /*@__PURE__*/proxyCustomElement(WinrBtn, [4,"winr-btn",{"kind":[1],"loading":[4],"type":[1],"disabled":[4]}]);
const WinrForm$1 = /*@__PURE__*/proxyCustomElement(WinrForm, [4,"winr-form",null,[[2,"submit","submit"]]]);
const WinrInput$1 = /*@__PURE__*/proxyCustomElement(WinrInput, [0,"winr-input",{"label":[1],"noValidate":[4,"no-validate"],"validators":[1],"errors":[1],"native":[1],"value":[1025],"valid":[32],"innerNative":[32],"innerErrors":[32]},[[0,"validateResult","validateResult"]]]);
const WinrModal$1 = /*@__PURE__*/proxyCustomElement(WinrModal, [1,"winr-modal",{"caption":[1],"shown":[32]},[[2,"click","handleBackdropClick"]]]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      WinrBtn$1,
  WinrForm$1,
  WinrInput$1,
  WinrModal$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { WinrBtn$1 as WinrBtn, WinrForm$1 as WinrForm, WinrInput$1 as WinrInput, WinrModal$1 as WinrModal, addValidator, defineCustomElements, validators };
