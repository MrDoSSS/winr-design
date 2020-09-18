'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a82ac749.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["winr-btn_2.cjs",[[1,"winr-btn",{"type":[1],"loading":[4]}],[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
