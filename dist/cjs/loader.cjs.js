'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-20cc980c.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["winr-btn_3.cjs",[[4,"winr-btn",{"kind":[1],"loading":[4]}],[1,"winr-form"],[1,"winr-input",{"label":[1],"validable":[4],"validator":[1],"innerValidator":[32],"value":[32],"errors":[32]},[[0,"validateResult","validateResult"]]]]],["winr-modal.cjs",[[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
