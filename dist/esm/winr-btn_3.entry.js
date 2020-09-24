import { r as registerInstance, h, g as getElement, H as Host } from './index-12ec3652.js';
import { v as validators } from './validator-a7a086e8.js';

const winrBtnCss = ":host{display:inline-block}";

const WinrBtn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.kind = 'primary';
    this.loading = false;
    this.type = 'button';
  }
  render() {
    return (h("button", { class: { [this.kind]: true, loading: this.loading }, type: this.type, disabled: this.disabled }, h("span", null, h("slot", null))));
  }
};
WinrBtn.style = winrBtnCss;

const WinrForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("form", null, h("slot", null)));
  }
  get el() { return getElement(this); }
};

function isEmpty(value) {
  return value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);
}

const winrInputCss = "winr-input{display:block;position:relative;--paddint-top:1.25rem}winr-input input{padding:var(--paddint-top) 0 0.25rem;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:0.05rem solid #ced4da;outline:none;appearance:none;transition:border-color 0.15s ease-in-out}winr-input input::placeholder{opacity:0}winr-input input:not(:placeholder-shown)~label{padding-top:0.5rem;font-size:0.75rem;border:none;color:#777}winr-input input:not(:placeholder-shown):invalid{border-bottom-color:var(--wds__error-color)}winr-input label{padding-top:calc(var(--paddint-top) + 0.2rem);position:absolute;top:0;left:0;display:block;font-size:1rem;line-height:1em;width:100%;color:#495057;pointer-events:none;cursor:text;border-left:0.01rem solid transparent;transition:padding 0.1s ease-in-out, font-size 0.1s ease-in-out;box-sizing:border-box}winr-input ul.errors{list-style:none;margin:0.3rem 0 0;padding:0;color:var(--wds__error-color)}winr-input ul.errors li{padding-left:0}winr-input ul.errors li::before{display:none}";

const WinrInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.noValidate = false;
    this.innerErrors = [];
    this.updateValue = (e) => {
      this.value = e.target.value;
      this.setCustomValidity();
    };
  }
  componentWillLoad() {
    this.parseValidator(this.validators);
    this.parseInputAttrs(this.inputAttrs);
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
    if (newValue)
      this.innerValidators = JSON.parse(newValue);
  }
  parseInputAttrs(newValue) {
    if (newValue)
      this.innerInputAttrs = JSON.parse(newValue);
  }
  parseErrors(newValue) {
    if (newValue)
      this.innerErrors = JSON.parse(newValue);
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
    this.input.setCustomValidity(this.innerErrors.join('\n'));
    this.valid = this.input.checkValidity();
  }
  get input() {
    return this.el.querySelector('input');
  }
  render() {
    return (h(Host, { invalid: !this.valid }, h("input", Object.assign({ placeholder: this.label, value: this.value, onInput: this.updateValue }, this.innerInputAttrs)), h("label", null, this.label), h("ul", { class: "errors" }, this.innerErrors.map(e => h("li", null, e)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "validators": ["parseValidator"],
    "inputAttrs": ["parseInputAttrs"],
    "errors": ["parseErrors"],
    "value": ["validate"],
    "innerErrors": ["setCustomValidity"]
  }; }
};
WinrInput.style = winrInputCss;

export { WinrBtn as winr_btn, WinrForm as winr_form, WinrInput as winr_input };
