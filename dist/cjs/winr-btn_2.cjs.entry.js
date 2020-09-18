'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a82ac749.js');

const winrBtnCss = ":host{display:block}";

const WinrBtn = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loading = false;
  }
  render() {
    return (index.h("button", { class: { [this.type]: true, loading: this.loading } }, index.h("span", null, index.h("slot", null))));
  }
};
WinrBtn.style = winrBtnCss;

const winrModalCss = ":host{display:none;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3);z-index:1000}:host(.shown){display:block}.content{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:white;box-shadow:0 12px 34px 0 rgba(0, 0, 0, 0.22);padding:40px 36px 68px;width:788px;border-radius:4px;max-height:95%}.title{margin:0 0 36px;font-size:28px}.close{position:absolute;top:22px;right:22px;min-width:36px;min-height:36px;border-radius:50%;background-color:#edece8;padding:0;font-size:14px}.body{margin-bottom:50px}";

const WinrModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.opened = index.createEvent(this, "opened", 7);
    this.closed = index.createEvent(this, "closed", 7);
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
    return (index.h(index.Host, { class: { shown: this.shown } }, index.h("div", { class: "content" }, index.h("button", { class: "close", onClick: this.hide.bind(this) }, "\u00D7"), index.h("header", null, index.h("slot", { name: "header" }, index.h("h3", { class: "title" }, this.caption))), index.h("div", { class: "body" }, index.h("slot", null)), index.h("footer", null, index.h("slot", { name: "footer" })))));
  }
  get el() { return index.getElement(this); }
};
WinrModal.style = winrModalCss;

exports.winr_btn = WinrBtn;
exports.winr_modal = WinrModal;
