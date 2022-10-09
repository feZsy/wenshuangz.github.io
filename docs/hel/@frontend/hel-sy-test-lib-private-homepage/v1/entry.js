(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@frontend/hel-sy-test-lib-private-homepage"] = {}, global.helLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	// import { appGroupName } from '../../package.json'
	// 如果从 package.json 直接导出 appGroupName
	// rollup 打包需要配置 @rollup/plugin-json
	// webpack 打包会把整个 package 对象打到运行代码里
	const LIB_NAME = '@frontend/hel-sy-test-lib-private-homepage';

	const lib = helLibProxy.exposeLib(LIB_NAME);

	exports["default"] = lib;
	exports.lib = lib;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
