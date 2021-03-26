(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SyntaxHighlighter",(function(){return syntaxhighlighter_SyntaxHighlighter}));__webpack_require__(40),__webpack_require__(8),__webpack_require__(44),__webpack_require__(92),__webpack_require__(99);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(18),dist_esm=__webpack_require__(1),global_window=__webpack_require__(3),memoizerific=__webpack_require__(20),memoizerific_default=__webpack_require__.n(memoizerific),jsx=__webpack_require__(908),jsx_default=__webpack_require__.n(jsx),bash=__webpack_require__(915),bash_default=__webpack_require__.n(bash),css=__webpack_require__(917),css_default=__webpack_require__.n(css),js_extras=__webpack_require__(906),js_extras_default=__webpack_require__.n(js_extras),json=__webpack_require__(909),json_default=__webpack_require__.n(json),graphql=__webpack_require__(922),graphql_default=__webpack_require__.n(graphql),markup=__webpack_require__(918),markup_default=__webpack_require__.n(markup),markdown=__webpack_require__(913),markdown_default=__webpack_require__.n(markdown),yaml=__webpack_require__(911),yaml_default=__webpack_require__.n(yaml),tsx=__webpack_require__(919),tsx_default=__webpack_require__.n(tsx),typescript=__webpack_require__(921),typescript_default=__webpack_require__.n(typescript),prism_light=__webpack_require__(873),prism_light_default=__webpack_require__.n(prism_light),ActionBar=__webpack_require__(842),ScrollArea=__webpack_require__(395),dist=__webpack_require__(43),dist_default=__webpack_require__.n(dist),formatter=memoizerific_default()(2)((function(code){return dist_default()(code)}));function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}prism_light_default.a.registerLanguage("jsextra",js_extras_default.a),prism_light_default.a.registerLanguage("jsx",jsx_default.a),prism_light_default.a.registerLanguage("json",json_default.a),prism_light_default.a.registerLanguage("yml",yaml_default.a),prism_light_default.a.registerLanguage("md",markdown_default.a),prism_light_default.a.registerLanguage("bash",bash_default.a),prism_light_default.a.registerLanguage("css",css_default.a),prism_light_default.a.registerLanguage("html",markup_default.a),prism_light_default.a.registerLanguage("tsx",tsx_default.a),prism_light_default.a.registerLanguage("typescript",typescript_default.a),prism_light_default.a.registerLanguage("graphql",graphql_default.a);var syntaxhighlighter_copyToClipboard,themedSyntax=memoizerific_default()(2)((function(theme){return Object.entries(theme.code||{}).reduce((function(acc,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];return Object.assign({},acc,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},"* .".concat(key),val))}),{})}));syntaxhighlighter_copyToClipboard=global_window.navigator.clipboard?function copyToClipboard(text){return global_window.navigator.clipboard.writeText(text)}:function(){var _ref3=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(text){var tmp,focus;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:tmp=global_window.document.createElement("TEXTAREA"),focus=global_window.document.activeElement,tmp.value=text,global_window.document.body.appendChild(tmp),tmp.select(),global_window.document.execCommand("copy"),global_window.document.body.removeChild(tmp),focus.focus();case 8:case"end":return _context.stop()}}),_callee)})));return function copyToClipboard(_x){return _ref3.apply(this,arguments)}}();var Wrapper=dist_esm.styled.div((function(_ref4){return{position:"relative",overflow:"hidden",color:_ref4.theme.color.defaultText}}),(function(_ref5){var theme=_ref5.theme;return _ref5.bordered?{border:"1px solid ".concat(theme.appBorderColor),borderRadius:theme.borderRadius,background:theme.background.content}:{}})),Scroller=Object(dist_esm.styled)((function(_ref6){var children=_ref6.children,className=_ref6.className;return react_default.a.createElement(ScrollArea.a,{horizontal:!0,vertical:!0,className:className},children)}))({position:"relative"},(function(_ref7){return{"& code":{paddingRight:_ref7.theme.layoutMargin}}}),(function(_ref8){var theme=_ref8.theme;return themedSyntax(theme)})),Pre=dist_esm.styled.pre((function(_ref9){var theme=_ref9.theme;return{display:"flex",justifyContent:"flex-start",margin:0,padding:_ref9.padded?theme.layoutMargin:0}})),Code=dist_esm.styled.code({flex:1,paddingRight:0,opacity:1}),syntaxhighlighter_SyntaxHighlighter=function SyntaxHighlighter(_ref10){var children=_ref10.children,_ref10$language=_ref10.language,language=void 0===_ref10$language?"jsx":_ref10$language,_ref10$copyable=_ref10.copyable,copyable=void 0!==_ref10$copyable&&_ref10$copyable,_ref10$bordered=_ref10.bordered,bordered=void 0!==_ref10$bordered&&_ref10$bordered,_ref10$padded=_ref10.padded,padded=void 0!==_ref10$padded&&_ref10$padded,_ref10$format=_ref10.format,format=void 0===_ref10$format||_ref10$format,_ref10$className=_ref10.className,className=void 0===_ref10$className?null:_ref10$className,_ref10$showLineNumber=_ref10.showLineNumbers,showLineNumbers=void 0!==_ref10$showLineNumber&&_ref10$showLineNumber,rest=_objectWithoutProperties(_ref10,["children","language","copyable","bordered","padded","format","className","showLineNumbers"]);if("string"!=typeof children||!children.trim())return null;var highlightableCode=format?formatter(children):children.trim(),_useState2=_slicedToArray(Object(react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1];return react_default.a.createElement(Wrapper,{bordered:bordered,padded:padded,className:className},react_default.a.createElement(Scroller,null,react_default.a.createElement(prism_light_default.a,_extends({padded:padded||bordered,language:language,showLineNumbers:showLineNumbers,showInlineLineNumbers:showLineNumbers,useInlineStyles:!1,PreTag:Pre,CodeTag:Code,lineNumberContainerStyle:{}},rest),highlightableCode)),copyable?react_default.a.createElement(ActionBar.a,{actionItems:[{title:copied?"Copied":"Copy",onClick:function onClick(e){e.preventDefault(),syntaxhighlighter_copyToClipboard(highlightableCode).then((function(){setCopied(!0),global_window.window.setTimeout((function(){return setCopied(!1)}),1500)})).catch(esm.a.error)}}]}):null)};syntaxhighlighter_SyntaxHighlighter.displayName="SyntaxHighlighter";__webpack_exports__.default=syntaxhighlighter_SyntaxHighlighter}}]);