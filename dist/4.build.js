/*!
 * This file is created by longjw 
 *  email : hilongjw@gmail.com 
 *  updated_at : Tue Jan 12 2016 11:48:24 GMT+0800 (中国标准时间)
 */
webpackJsonp([4],{6:function(e,t,o){var n,i,r;/*!
		Autosize 3.0.14
		license: MIT
		http://www.jacklmoore.com/autosize
	*/
!function(o,d){i=[t,e],n=d,r="function"==typeof n?n.apply(t,i):n,!(void 0!==r&&(e.exports=r))}(this,function(e,t){"use strict";function o(e){function t(){var t=window.getComputedStyle(e,null);p=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),c="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(c)&&(c=0),i()}function o(t){var o=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=o,p=t,u&&(e.style.overflowY=t),n()}function n(){var t=window.pageYOffset,o=document.body.scrollTop,n=e.style.height;e.style.height="auto";var i=e.scrollHeight+c;return 0===e.scrollHeight?void(e.style.height=n):(e.style.height=i+"px",f=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=o))}function i(){var t=e.style.height;n();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==p&&o("visible"):"hidden"!==p&&o("hidden"),t!==e.style.height){var r=document.createEvent("Event");r.initEvent("autosize:resized",!0,!1),e.dispatchEvent(r)}}var d=void 0===arguments[1]?{}:arguments[1],s=d.setOverflowX,a=void 0===s?!0:s,l=d.setOverflowY,u=void 0===l?!0:l;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var c=null,p=null,f=e.clientWidth,v=function(){e.clientWidth!==f&&i()},h=function(t){window.removeEventListener("resize",v,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",h,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(o){e.style[o]=t[o]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",h,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",v,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),a&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function n(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:update",!0,!1),e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(d=function(e){return e},d.destroy=function(e){return e},d.update=function(e){return e}):(d=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return o(e,t)}),e},d.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],n),e},d.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=d})},71:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(5),r=(n(i),o(6)),d=(n(r),o(4)),s=n(d);s["default"].state.Cloud.Object.extend("Post");t["default"]={data:function(){return{login:{username:"",password:"",passwordType:"password"},sign:{username:"",password:"",passwordType:"password"}}},computed:{modal:function(){return s["default"].state.modal}},ready:function(){this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},methods:{hideModal:function(){s["default"].actions.hideModal()}}}},118:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".cov-modal{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:100}.cov-modal .modal-btn{float:right}.cov-modal .mdl-card__actions{position:absolute;bottom:0}",""])},131:function(e,t,o){var n=o(118);"string"==typeof n&&(n=[[e.id,n,""]]);o(3)(n,{});n.locals&&(e.exports=n.locals)},148:function(e,t){e.exports='<div class="cov-modal mdl-card mdl-shadow--4dp" id=cov-modal v-show=modal.show><div class=mdl-card__supporting-text>{{modal.title}}</div><div class=mdl-card__supporting-text>{{modal.text}}</div><div class=mdl-card__actions><a v-tap=hideModal class="modal-btn mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">ok</a></div></div>'},156:function(e,t,o){var n,i;o(131),n=o(71),i=o(148),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)}});