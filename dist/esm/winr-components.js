import { p as promiseResolve, b as bootstrapLazy } from './index-fec29c76.js';

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
  return bootstrapLazy([["winr-btn_3",[[1,"winr-btn",{"type":[1],"loading":[4]}],[1,"winr-input",{"label":[1],"validable":[4],"validator":[1],"innerValidator":[32],"value":[32],"errors":[32]},[[0,"validateResult","validateResult"]]],[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
});
