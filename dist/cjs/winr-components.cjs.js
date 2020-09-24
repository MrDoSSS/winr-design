'use strict';

const index = require('./index-ccadf094.js');

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
  return index.bootstrapLazy([["winr-btn_3.cjs",[[4,"winr-btn",{"kind":[1],"loading":[4],"type":[1],"disabled":[4]}],[4,"winr-form",null,[[2,"submit","submit"]]],[0,"winr-input",{"label":[1],"noValidate":[4,"no-validate"],"validators":[1],"errors":[1],"inputAttrs":[1,"input-attrs"],"value":[1025],"valid":[32],"innerInputAttrs":[32],"innerErrors":[32]},[[0,"validateResult","validateResult"]]]]],["winr-modal.cjs",[[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
});
