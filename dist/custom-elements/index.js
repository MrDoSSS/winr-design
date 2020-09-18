import { attachShadow, h, createEvent, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const winrBtnCss = ":host{display:block}";

const WinrBtn = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.loading = false;
  }
  render() {
    return (h("button", { class: { [this.type]: true, loading: this.loading } }, h("span", null, h("slot", null))));
  }
  static get style() { return winrBtnCss; }
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
const WinrModal$1 = /*@__PURE__*/proxyCustomElement(WinrModal, [1,"winr-modal",{"caption":[1],"shown":[32]},[[2,"click","handleBackdropClick"]]]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      WinrBtn$1,
  WinrModal$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { WinrBtn$1 as WinrBtn, WinrModal$1 as WinrModal, defineCustomElements };
