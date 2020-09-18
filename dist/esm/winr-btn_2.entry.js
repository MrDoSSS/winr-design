import { r as registerInstance, h, c as createEvent, H as Host, g as getElement } from './index-73ec2dc2.js';

const winrBtnCss = ":host{display:block}";

const WinrBtn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loading = false;
  }
  render() {
    return (h("button", { class: { [this.type]: true, loading: this.loading } }, h("span", null, h("slot", null))));
  }
};
WinrBtn.style = winrBtnCss;

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

export { WinrBtn as winr_btn, WinrModal as winr_modal };
