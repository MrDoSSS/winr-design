import { p as promiseResolve, b as bootstrapLazy } from './index-12ec3652.js';

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["winr-btn_3",[[4,"winr-btn",{"kind":[1],"loading":[4],"type":[1],"disabled":[4]}],[4,"winr-form",null,[[2,"submit","submit"]]],[0,"winr-input",{"label":[1],"noValidate":[4,"no-validate"],"validators":[1],"errors":[1],"native":[1],"value":[1025],"valid":[32],"innerNative":[32],"innerErrors":[32]},[[0,"validateResult","validateResult"]]]]],["winr-modal",[[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
});
