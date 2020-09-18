import { p as promiseResolve, b as bootstrapLazy } from './index-73ec2dc2.js';

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
  return bootstrapLazy([["winr-btn_2",[[1,"winr-btn",{"type":[1],"loading":[4]}],[1,"winr-modal",{"caption":[1],"shown":[32],"show":[64],"hide":[64]},[[2,"click","handleBackdropClick"]]]]]], options);
});
