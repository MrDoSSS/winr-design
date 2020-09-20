'use strict';

const index = require('./index-b686719b.js');

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('winr-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["winr-btn_3.cjs",[[1,"winr-btn",{"type":[1],"loading":[4]}],[1,"winr-input",{"label":[1],"validable":[4],"validator":[1],"innerValidator":[32],"value":[32],"errors":[32]},[[0,"validateResult","validateResult"]]],[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
});
