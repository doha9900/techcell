/*! For license information please see post_editor_block.4506df0c.js.LICENSE.txt */
!function(){var __webpack_modules__={61:function(module,__unused_webpack_exports,__webpack_require__){var ___EXPOSE_LOADER_IMPORT___=__webpack_require__(231),___EXPOSE_LOADER_GLOBAL_THIS___=__webpack_require__(868);void 0===___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib&&(___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib={}),void 0===___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib.React&&(___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib.React=___EXPOSE_LOADER_IMPORT___),module.exports=___EXPOSE_LOADER_IMPORT___},760:function(module,__unused_webpack_exports,__webpack_require__){var ___EXPOSE_LOADER_IMPORT___=__webpack_require__(264),___EXPOSE_LOADER_GLOBAL_THIS___=__webpack_require__(868);void 0===___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib&&(___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib={}),void 0===___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib.ReactJsxRuntime&&(___EXPOSE_LOADER_GLOBAL_THIS___.MailPoetLib.ReactJsxRuntime=___EXPOSE_LOADER_IMPORT___),module.exports=___EXPOSE_LOADER_IMPORT___},868:function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=function(){if("object"==typeof globalThis)return globalThis;var g;try{g=this||new Function("return this")()}catch(e){if("object"==typeof window)return window;if("object"==typeof self)return self;if(void 0!==__webpack_require__.g)return __webpack_require__.g}return g}()},538:function(module){"use strict";var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(null==val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}module.exports=function(){try{if(!Object.assign)return!1;var test1=new String("abc");if(test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;for(var test2={},i=0;i<10;i++)test2["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(test2).map((function(n){return test2[n]})).join(""))return!1;var test3={};return"abcdefghijklmnopqrst".split("").forEach((function(letter){test3[letter]=letter})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},test3)).join("")}catch(err){return!1}}()?Object.assign:function(target,source){for(var from,symbols,to=toObject(target),s=1;s<arguments.length;s++){for(var key in from=Object(arguments[s]))hasOwnProperty.call(from,key)&&(to[key]=from[key]);if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++)propIsEnumerable.call(from,symbols[i])&&(to[symbols[i]]=from[symbols[i]])}}return to}},835:function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(596);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},519:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(835)()},596:function(module){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},119:function(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__(538);var f=__webpack_require__(61),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},618:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var l=__webpack_require__(538),n=60103,p=60106;exports.Fragment=60107,exports.StrictMode=60108,exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;if("function"==typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element"),p=w("react.portal"),exports.Fragment=w("react.fragment"),exports.StrictMode=w("react.strict_mode"),exports.Profiler=w("react.profiler"),q=w("react.provider"),r=w("react.context"),t=w("react.forward_ref"),exports.Suspense=w("react.suspense"),u=w("react.memo"),v=w("react.lazy")}var x="function"==typeof Symbol&&Symbol.iterator;function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a,this.context=b,this.refs=B,this.updater=c||A}function D(){}function E(a,b,c){this.props=a,this.context=b,this.refs=B,this.updater=c||A}C.prototype.isReactComponent={},C.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")},C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},D.prototype=C.prototype;var F=E.prototype=new D;F.constructor=E,l(F,C.prototype),F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}function L(a){return"object"==typeof a&&null!==a&&a.$$typeof===n}var M=/\/+/g;function N(a,b){return"object"==typeof a&&null!==a&&null!=a.key?function(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,(function(a){return b[a]}))}(""+a.key):b.toString(36)}function O(a,b,c,e,d){var k=typeof a;"undefined"!==k&&"boolean"!==k||(a=null);var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return d=d(h=a),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",(function(a){return a}))):null!=d&&(L(d)&&(d=function(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;if(h=0,e=""===e?".":e+":",Array.isArray(a))for(var g=0;g<a.length;g++){var f=e+N(k=a[g],g);h+=O(k,b,c,f,d)}else if(f=function(a){return null===a||"object"!=typeof a?null:"function"==typeof(a=x&&a[x]||a["@@iterator"])?a:null}(a),"function"==typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)h+=O(k=k.value,b,c,f=e+N(k,g++),d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;return O(a,e,"","",(function(a){return b.call(c,a,d++)})),e}function Q(a){if(-1===a._status){var b=a._result;b=b(),a._status=0,a._result=b,b.then((function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)}),(function(b){0===a._status&&(a._status=2,a._result=b)}))}if(1===a._status)return a._result;throw a._result}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:P,forEach:function(a,b,c){P(a,(function(){b.apply(this,arguments)}),c)},count:function(a){var b=0;return P(a,(function(){b++})),b},toArray:function(a){return P(a,(function(a){return a}))||[]},only:function(a){if(!L(a))throw Error(z(143));return a}},exports.Component=C,exports.PureComponent=E,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,exports.cloneElement=function(a,b,c){if(null==a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){if(void 0!==b.ref&&(k=b.ref,h=G.current),void 0!==b.key&&(d=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,key:d,ref:k,props:e,_owner:h}},exports.createContext=function(a,b){return void 0===b&&(b=null),(a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:q,_context:a},a.Consumer=a},exports.createElement=J,exports.createFactory=function(a){var b=J.bind(null,a);return b.type=a,b},exports.createRef=function(){return{current:null}},exports.forwardRef=function(a){return{$$typeof:t,render:a}},exports.isValidElement=L,exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}},exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}},exports.useCallback=function(a,b){return S().useCallback(a,b)},exports.useContext=function(a,b){return S().useContext(a,b)},exports.useDebugValue=function(){},exports.useEffect=function(a,b){return S().useEffect(a,b)},exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)},exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)},exports.useMemo=function(a,b){return S().useMemo(a,b)},exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)},exports.useRef=function(a){return S().useRef(a)},exports.useState=function(a){return S().useState(a)},exports.version="17.0.2"},231:function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__(618)},264:function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__(119)}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},function(){"use strict";var jsx_runtime_exposed=__webpack_require__(760);const wp=window.wp,{G:G,Path:Path,SVG:SVG}=wp.components,Icon=(0,jsx_runtime_exposed.jsx)(SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 152.02 156.4",children:(0,jsx_runtime_exposed.jsxs)(G,{children:[(0,jsx_runtime_exposed.jsx)(Path,{d:"M37.71,89.1c3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V35.7l17,45.1a12.68,12.68,0,0,0,3.7,5.4c1.6,1.3,4,2,7.2,2a12.54,12.54,0,0,0,5.9-1.4,8.41,8.41,0,0,0,3.9-5l18.1-50V81a8.53,8.53,0,0,0,2.1,6.1c1.4,1.4,3.7,2.2,6.9,2.2,3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V8.7a7.48,7.48,0,0,0-3.3-6.6c-2.1-1.4-5-2.1-8.6-2.1a19.3,19.3,0,0,0-9.4,2,11.63,11.63,0,0,0-5.1,6.8L74.91,67.1,54.41,8.4a12.4,12.4,0,0,0-4.5-6.2c-2.1-1.5-5-2.2-8.8-2.2a16.51,16.51,0,0,0-8.9,2.1c-2.3,1.5-3.5,3.9-3.5,7.2V80.8c0,2.8.7,4.8,2,6.2C32.21,88.4,34.41,89.1,37.71,89.1Z"}),(0,jsx_runtime_exposed.jsx)(Path,{d:"M149,116.6l-2.4-1.9a7.4,7.4,0,0,0-9.4.3,19.65,19.65,0,0,1-12.5,4.6h-21.4A37.08,37.08,0,0,0,77,130.5l-1.1,1.2-1.1-1.1a37.25,37.25,0,0,0-26.3-10.9H27a19.59,19.59,0,0,1-12.4-4.6,7.28,7.28,0,0,0-9.4-.3l-2.4,1.9A7.43,7.43,0,0,0,0,122.2a7.14,7.14,0,0,0,2.4,5.7A37.28,37.28,0,0,0,27,137.4h21.6a19.59,19.59,0,0,1,18.9,14.4v.2c.1.7,1.2,4.4,8.5,4.4s8.4-3.7,8.5-4.4v-.2a19.59,19.59,0,0,1,18.9-14.4H125a37.28,37.28,0,0,0,24.6-9.5,7.42,7.42,0,0,0,2.4-5.7A7.86,7.86,0,0,0,149,116.6Z"})]})});var prop_types=__webpack_require__(519),prop_types_default=__webpack_require__.n(prop_types);const edit_wp=window.wp,{Placeholder:Placeholder,PanelBody:PanelBody}=edit_wp.components,{BlockIcon:BlockIcon,InspectorControls:InspectorControls}=edit_wp.blockEditor,ServerSideRender=edit_wp.serverSideRender,allForms=window.mailpoet_forms;function Edit(_ref){let{attributes:attributes,setAttributes:setAttributes}=_ref;function selectFormSettings(){return(0,jsx_runtime_exposed.jsxs)("div",{className:"mailpoet-block-create-new-content",children:[(0,jsx_runtime_exposed.jsx)("a",{href:"admin.php?page=mailpoet-form-editor-template-selection",target:"_blank",className:"mailpoet-block-create-new-link",children:window.locale.createForm}),Array.isArray(allForms)?0===allForms.length?null:(0,jsx_runtime_exposed.jsxs)("select",{onChange:event=>{setAttributes({formId:parseInt(event.target.value,10)})},className:"mailpoet-block-create-forms-list",value:attributes.formId,children:[(0,jsx_runtime_exposed.jsx)("option",{value:"",disabled:!0,selected:!0,children:window.locale.selectForm}),allForms.map((form=>(0,jsx_runtime_exposed.jsx)("option",{value:form.id,children:form.name+("disabled"===form.status?` (${window.locale.inactive})`:"")})))]}):null]})}return(0,jsx_runtime_exposed.jsxs)(jsx_runtime_exposed.Fragment,{children:[(0,jsx_runtime_exposed.jsx)(InspectorControls,{children:(0,jsx_runtime_exposed.jsx)(PanelBody,{title:"MailPoet Subscription Form",initialOpen:!0,children:selectFormSettings()})}),(0,jsx_runtime_exposed.jsxs)("div",{className:"mailpoet-block-div",children:[null===attributes.formId&&(0,jsx_runtime_exposed.jsx)(Placeholder,{className:"mailpoet-block-create-new",icon:(0,jsx_runtime_exposed.jsx)(BlockIcon,{icon:Icon,showColors:!0}),label:window.locale.subscriptionForm,children:selectFormSettings()}),null!==attributes.formId&&(0,jsx_runtime_exposed.jsx)(ServerSideRender,{block:"mailpoet/subscription-form-block-render",attributes:{formId:attributes.formId}})]})]})}Edit.propTypes={attributes:prop_types_default().shape({formId:prop_types_default().number}).isRequired,setAttributes:prop_types_default().func.isRequired};const form_block_wp=window.wp,{registerBlockType:registerBlockType}=form_block_wp.blocks;registerBlockType("mailpoet/subscription-form-block-render",{title:window.locale.subscriptionForm,attributes:{formId:{type:"number",default:null}},supports:{inserter:!1}}),registerBlockType("mailpoet/subscription-form-block",{title:window.locale.subscriptionForm,icon:Icon,category:"widgets",example:{},attributes:{formId:{type:"number",default:null}},edit:Edit,save:()=>null})}()}();