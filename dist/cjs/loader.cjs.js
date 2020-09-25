'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ccadf094.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["winr-btn_3.cjs",[[4,"winr-btn",{"kind":[1],"loading":[4],"type":[1],"disabled":[4]}],[4,"winr-form",null,[[2,"submit","submit"]]],[0,"winr-input",{"label":[1],"noValidate":[4,"no-validate"],"validators":[1],"errors":[1],"native":[1],"value":[1025],"valid":[32],"innerNative":[32],"innerErrors":[32]},[[0,"validateResult","validateResult"]]]]],["winr-modal.cjs",[[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
