let n;const e=new Array(32);function t(n){return e[n]}e.fill(void 0),e.push(void 0,null,!0,!1);let _=e.length;function r(n){const r=t(n);return function(n){n<36||(e[n]=_,_=n)}(n),r}let o=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let c=null;function i(){return null!==c&&c.buffer===n.memory.buffer||(c=new Uint8Array(n.memory.buffer)),c}function a(n,e){return o.decode(i().subarray(n,n+e))}function u(n){_===e.length&&e.push(e.length+1);const t=_;return _=e[t],e[t]=n,t}let b=0,w=new TextEncoder("utf-8");const l="function"==typeof w.encodeInto?function(n,e){return w.encodeInto(n,e)}:function(n,e){const t=w.encode(n);return e.set(t),{read:n.length,written:t.length}};function f(n,e,t){if(void 0===t){const t=w.encode(n),_=e(t.length);return i().subarray(_,_+t.length).set(t),b=t.length,_}let _=n.length,r=e(_);const o=i();let c=0;for(;c<_;c++){const e=n.charCodeAt(c);if(e>127)break;o[r+c]=e}if(c!==_){0!==c&&(n=n.slice(c)),r=t(r,_,_=c+3*n.length);const e=i().subarray(r+c,r+_);c+=l(n,e).written}return b=c,r}function g(n){return null==n}let d=null;function s(){return null!==d&&d.buffer===n.memory.buffer||(d=new Int32Array(n.memory.buffer)),d}function m(n,e){return 0===n?t(e):a(n,e)}function h(e){n.__wbindgen_exn_store(u(e))}(function e(_){let o;void 0===_&&(_=import.meta.url.replace(/\.js$/,"_bg.wasm"));const c={wbg:{}};if(c.wbg.__widl_f_clone_node_with_deep_Node=function(n,e){try{return u(t(n).cloneNode(0!==e))}catch(n){h(n)}},c.wbg.__widl_instanceof_Element=function(n){return t(n)instanceof Element},c.wbg.__widl_f_first_child_Node=function(n){var e=t(n).firstChild;return g(e)?0:u(e)},c.wbg.__widl_f_remove_child_Node=function(n,e){try{return u(t(n).removeChild(t(e)))}catch(n){h(n)}},c.wbg.__wbindgen_object_drop_ref=function(n){r(n)},c.wbg.__widl_f_query_selector_all_Element=function(n,e,_){try{var r=m(e,_);return u(t(n).querySelectorAll(r))}catch(n){h(n)}},c.wbg.__widl_f_length_NodeList=function(n){return t(n).length},c.wbg.__widl_f_text_content_Node=function(e,_){var r=t(_).textContent,o=g(r)?0:f(r,n.__wbindgen_malloc,n.__wbindgen_realloc),c=b;s()[e/4+1]=c,s()[e/4+0]=o},c.wbg.__wbindgen_string_new=function(n,e){return u(a(n,e))},c.wbg.__wbg_replace_8f316f864d6bf31e=function(n,e,_,r){var o=m(_,r);return u(t(n).replace(t(e),o))},c.wbg.__wbindgen_string_get=function(e,_){const r=t(_);var o="string"==typeof r?r:void 0,c=g(o)?0:f(o,n.__wbindgen_malloc,n.__wbindgen_realloc),i=b;s()[e/4+1]=i,s()[e/4+0]=c},c.wbg.__widl_instanceof_HTMLImageElement=function(n){return t(n)instanceof HTMLImageElement},c.wbg.__widl_f_parent_node_Node=function(n){var e=t(n).parentNode;return g(e)?0:u(e)},c.wbg.__widl_f_alt_HTMLImageElement=function(e,_){var r=f(t(_).alt,n.__wbindgen_malloc,n.__wbindgen_realloc),o=b;s()[e/4+1]=o,s()[e/4+0]=r},c.wbg.__widl_f_create_text_node_Document=function(n,e,_){var r=m(e,_);return u(t(n).createTextNode(r))},c.wbg.__widl_f_replace_child_Node=function(n,e,_){try{return u(t(n).replaceChild(t(e),t(_)))}catch(n){h(n)}},c.wbg.__wbg_test_41b5f603c1c6a281=function(n,e,_){var r=m(e,_);return t(n).test(r)},c.wbg.__wbg_setlastindex_636403a6b8935149=function(n,e){t(n).lastIndex=e>>>0},c.wbg.__wbg_new0_926efe275b9bd771=function(){return u(new Date)},c.wbg.__wbg_toUTCString_c6c53dddfae1eb43=function(n){return u(t(n).toUTCString())},c.wbg.__wbindgen_cb_drop=function(n){const e=r(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},c.wbg.__widl_f_disconnect_MutationObserver=function(n){t(n).disconnect()},c.wbg.__wbg_new_9e4e8c6fadc05c7a=function(n,e,t,_){var r=m(n,e),o=m(t,_);return u(new RegExp(r,o))},c.wbg.__widl_f_log_1_=function(n){console.log(t(n))},c.wbg.__wbg_chromeportconnect_5dc6204b52808a38=function(n,e){var t,_=m(n,e);return u((t=_,chrome.runtime.connect(null,{name:t})))},c.wbg.__wbg_onDisconnect_1678887fe804d850=function(n){return u(t(n).onDisconnect)},c.wbg.__wbg_addListener_2ac5cbd510ccd7c6=function(n,e){t(n).addListener(t(e))},c.wbg.__widl_f_set_timeout_with_callback_and_timeout_and_arguments_0_Window=function(n,e,_){try{return t(n).setTimeout(t(e),_)}catch(n){h(n)}},c.wbg.__widl_f_new_MutationObserver=function(n){try{return u(new MutationObserver(t(n)))}catch(n){h(n)}},c.wbg.__wbg_new_59cb74e423758ede=function(){return u(new Error)},c.wbg.__wbg_stack_558ba5917b466edd=function(e,_){var r=f(t(_).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),o=b;s()[e/4+1]=o,s()[e/4+0]=r},c.wbg.__wbg_error_4bb6c2a97407129a=function(e,t){var _=m(e,t);0!==e&&n.__wbindgen_free(e,t),console.error(_)},c.wbg.__wbindgen_cb_forget=function(n){r(n)},c.wbg.__widl_f_clear_timeout_with_handle_Window=function(n,e){t(n).clearTimeout(e)},c.wbg.__widl_f_location_Window=function(n){return u(t(n).location)},c.wbg.__widl_f_reload_Location=function(n){try{t(n).reload()}catch(n){h(n)}},c.wbg.__widl_f_get_NodeList=function(n,e){var _=t(n)[e>>>0];return g(_)?0:u(_)},c.wbg.__widl_f_document_Window=function(n){var e=t(n).document;return g(e)?0:u(e)},c.wbg.__wbg_sendmessageraw_06db037e50adb455=function(n,e){var t,_=m(n,e);return u((t=_,new Promise((function(n,e){chrome.runtime.sendMessage(null,t,null,(function(t){null!=chrome.runtime.lastError?e(new Error(chrome.runtime.lastError.message)):n(t)}))}))))},c.wbg.__wbg_then_5a9068d7b674caf9=function(n,e,_){return u(t(n).then(t(e),t(_)))},c.wbg.__wbg_length_1881309ca6f2ebd6=function(n){return t(n).length},c.wbg.__wbg_get_bf32bf170c3d4d9a=function(n,e){return u(t(n)[e>>>0])},c.wbg.__widl_instanceof_MutationRecord=function(n){return t(n)instanceof MutationRecord},c.wbg.__wbg_now_65115a9aef2f5270=function(){return Date.now()},c.wbg.__wbg_postMessage_9cd8a6302d77f2ce=function(n,e,_){var r=m(e,_);t(n).postMessage(r)},c.wbg.__widl_f_query_selector_Document=function(n,e,_){try{var r=m(e,_),o=t(n).querySelector(r);return g(o)?0:u(o)}catch(n){h(n)}},c.wbg.__wbg_new_66e20d51c3e33b63=function(){return u(new Object)},c.wbg.__wbg_set_c3a2ba27703a6186=function(n,e,_){try{return Reflect.set(t(n),t(e),t(_))}catch(n){h(n)}},c.wbg.__widl_f_observe_with_options_MutationObserver=function(n,e,_){try{t(n).observe(t(e),t(_))}catch(n){h(n)}},c.wbg.__widl_f_type_MutationRecord=function(e,_){var r=f(t(_).type,n.__wbindgen_malloc,n.__wbindgen_realloc),o=b;s()[e/4+1]=o,s()[e/4+0]=r},c.wbg.__widl_f_added_nodes_MutationRecord=function(n){return u(t(n).addedNodes)},c.wbg.__wbg_exec_641c92568d076518=function(n,e,_){var r=m(e,_),o=t(n).exec(r);return g(o)?0:u(o)},c.wbg.__wbg_removeListener_f1deaca333139c3d=function(n,e){t(n).removeListener(t(e))},c.wbg.__wbindgen_throw=function(n,e){throw new Error(a(n,e))},c.wbg.__wbindgen_rethrow=function(n){throw r(n)},c.wbg.__wbg_then_79de0b6809569306=function(n,e){return u(t(n).then(t(e)))},c.wbg.__wbg_resolve_4e9c46f7e8321315=function(n){return u(Promise.resolve(t(n)))},c.wbg.__wbg_globalThis_1c2aa6db3ecb073e=function(){try{return u(globalThis.globalThis)}catch(n){h(n)}},c.wbg.__wbg_self_e5cdcdef79894248=function(){try{return u(self.self)}catch(n){h(n)}},c.wbg.__wbg_window_44ec8ac43884a4cf=function(){try{return u(window.window)}catch(n){h(n)}},c.wbg.__wbg_global_c9abcb94a14733fe=function(){try{return u(global.global)}catch(n){h(n)}},c.wbg.__wbindgen_is_undefined=function(n){return void 0===t(n)},c.wbg.__wbg_newnoargs_a9cd98b36c38f53e=function(n,e){var t=m(n,e);return u(new Function(t))},c.wbg.__wbg_call_222be890f6f564bb=function(n,e){try{return u(t(n).call(t(e)))}catch(n){h(n)}},c.wbg.__wbindgen_object_clone_ref=function(n){return u(t(n))},c.wbg.__widl_instanceof_Window=function(n){return t(n)instanceof Window},c.wbg.__wbindgen_closure_wrapper369=function(e,t,_){const r={a:e,b:t,cnt:1},o=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__hbf543a7afe63658a(e,t,u(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(33)(t,r.b):r.a=t}};return o.original=r,u(o)},c.wbg.__wbindgen_closure_wrapper114=function(e,t,_){const r={a:e,b:t,cnt:1},o=(e,t)=>{r.cnt++;const _=r.a;r.a=0;try{return function(e,t,_,r){n.wasm_bindgen__convert__closures__invoke2_mut__he43e10a65c90ead5(e,t,u(_),u(r))}(_,r.b,e,t)}finally{0==--r.cnt?n.__wbindgen_export_2.get(33)(_,r.b):r.a=_}};return o.original=r,u(o)},c.wbg.__wbindgen_closure_wrapper112=function(e,t,_){const r={a:e,b:t,cnt:1},o=()=>{r.cnt++;const e=r.a;r.a=0;try{return function(e,t){n.wasm_bindgen__convert__closures__invoke0_mut__h9be328fb2ce29e5e(e,t)}(e,r.b)}finally{0==--r.cnt?n.__wbindgen_export_2.get(33)(e,r.b):r.a=e}};return o.original=r,u(o)},c.wbg.__wbindgen_closure_wrapper111=function(e,t,_){const r={a:e,b:t,cnt:1},o=()=>{r.cnt++;const e=r.a;r.a=0;try{return function(e,t){n.wasm_bindgen__convert__closures__invoke0_mut__h9be328fb2ce29e5e(e,t)}(e,r.b)}finally{0==--r.cnt?n.__wbindgen_export_2.get(33)(e,r.b):r.a=e}};return o.original=r,u(o)},"function"==typeof URL&&_ instanceof URL||"string"==typeof _||"function"==typeof Request&&_ instanceof Request){const n=fetch(_);o="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(n,c).catch(e=>n.then(n=>{if("application/wasm"!=n.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),n.arrayBuffer();throw e}).then(n=>WebAssembly.instantiate(n,c))):n.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,c))}else o=WebAssembly.instantiate(_,c).then(n=>n instanceof WebAssembly.Instance?{instance:n,module:_}:n);return o.then(({instance:t,module:_})=>(n=t.exports,e.__wbindgen_wasm_module=_,n.__wbindgen_start(),n))})(chrome.runtime.getURL("js/twitch-chat.wasm")).catch(console.error);
//# sourceMappingURL=twitch_chat.js.map
