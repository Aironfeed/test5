(this.webpackJsonpmaks=this.webpackJsonpmaks||[]).push([[0],[function(e,t,n){!function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],p=0,a=i.length;p<a;p++,r++)o[r]=i[p];return o}function o(e,n){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var n=null!=t?t:o.next();return r[n]=e,n},resolve:function(e,t,n){var o=r[e];o&&(n(t)?o.resolve(t):o.reject(t),r[e]=null)}});return n((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,n=t.request_id,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["request_id"]);n&&i.resolve(n,o,(function(e){return!("error_type"in e)}))}})),function(n,o){return void 0===o&&(o={}),new Promise((function(r,p){var a=i.add({resolve:r,reject:p},o.request_id);e(n,t(t({},o),{request_id:a}))}))}}var r="undefined"!=typeof window,i=Boolean(r&&window.AndroidBridge),p=Boolean(r&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),a=r&&!i&&!p,u=a&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),s=a?"message":"VKWebAppEvent",d=n(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppShowNativeAds"],a&&!u?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowSubscriptionBox","VKWebAppShowInstallPushBox","VKWebAppGetFriends"]:["VKWebAppShowImages"]),c=r?window.AndroidBridge:void 0,l=p?window.webkit.messageHandlers:void 0;function b(e,t){var n=t||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!n.bubbles,!!n.cancelable,n.detail),o}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(b.prototype=Event.prototype,b));var f=function(e){var t=void 0,r=[];function u(e){r.push(e)}function b(){return p||i}function f(){return a&&window.parent!==window}function A(){return b()||f()}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(s,(function(e){if(p||i)return n(r).map((function(t){return t.call(null,e)}));if(a&&e&&e.data){var o=e.data,u=o.type,s=o.data,d=o.frameId;u&&"SetSupportedHandlers"===u?s.supportedHandlers:u&&"VKWebAppSettings"===u?t=d:n(r).map((function(e){return e({detail:{type:u,data:s}})}))}}));var w=o((function(n,o){c&&c[n]?c[n](JSON.stringify(o)):l&&l[n]&&"function"==typeof l[n].postMessage?l[n].postMessage(o):a&&parent.postMessage({handler:n,params:o,type:"vk-connect",webFrameId:t,connectVersion:e},"*")}),u);return{send:w,sendPromise:w,subscribe:u,unsubscribe:function(e){var t=r.indexOf(e);-1<t&&r.splice(t,1)},supports:function(e){return i?!(!c||"function"!=typeof c[e]):p?!(!l||!l[e]||"function"!=typeof l[e].postMessage):a&&-1<d.indexOf(e)},isWebView:b,isIframe:f,isEmbedded:A,isStandalone:function(){return!A()}}}("2.4.8");e.applyMiddleware=function e(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.includes(void 0)||n.includes(null)?e.apply(void 0,n.filter((function(e){return"function"==typeof e}))):function(e){if(0===n.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.send.apply(e,t)}};return o=n.filter((function(e){return"function"==typeof e})).map((function(e){return e(r)})).reduce((function(e,t){return function(n){return e(t(n))}}))(e.send),t(t({},e),{send:o})}},e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);r.a.send("VKWebAppInit",{}),r.a.subscribe((function(e){return console.log(e)})),r.a.send("VKWebAppInit",{}),console.log(r.a.send("VKWebAppInit",{})),r.a.send("VKWebAppAllowMessagesFromGroup",{group_id:209987058,key:"dBuBKe1kFcdemzB"});var i=[{question:"\u0413\u043e\u0434 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f IGM?",a:"2015 \u0433.",b:"2018 \u0433.",c:"2017 \u0433.",correct:"a"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432 \u0443 IGM?",a:"1,8 \u043c\u043b\u043d",b:"3,6 \u043c\u043b\u043d",c:"4 \u043c\u043b\u043d",correct:"c"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0446.\u0441\u0435\u0442\u0435\u0439 \u0443 IGM?",a:"5",b:"9",c:"8",correct:"b"},{question:"\u0422\u0435\u043c\u0430\u0442\u0438\u043a\u0430 IGM?",a:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",b:"\u0418\u0433\u0440\u044b",c:"\u0415\u0434\u0430",correct:"b"},{question:"\u0413\u0434\u0435 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f  IGM?",a:"VK",b:"twitch",c:"youtube",correct:"a"}],p=document.getElementById("quiz"),a=document.querySelectorAll(".answer"),u=document.getElementById("question"),s=document.getElementById("a_text"),d=document.getElementById("b_text"),c=document.getElementById("c_text"),l=document.getElementById("submit"),b=0,f=0;function A(){a.forEach((function(e){return e.checked=!1}));var e=i[b];u.innerText=e.question,s.innerText=e.a,d.innerText=e.b,c.innerText=e.c}A(),l.addEventListener("click",(function(){var e=function(){var e;return a.forEach((function(t){t.checked&&(e=t.id)})),e}();e&&(e===i[b].correct&&f++,++b<i.length?A():(f=f/i.length*100,p.innerHTML='<h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u0432\u044b \u0431\u044b\u043b\u0438 \u043f\u0440\u0430\u0432\u044b \u043d\u0430:</h2>\n            <p>'.concat(f,'%</p>\n            <h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u0417\u0430\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u043d\u0430 \u0441\u0430\u0439\u0442\u0435</h2>\n            <p align="center" style="color:#ffa600; border: 4px solid #ffa600;border-radius: 15px;width:300px;margin-left: auto;margin-right: auto;padding-top: 6px;padding-bottom: 6px;"><a href="https://free1krub.taplink.ws/">\u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u041d\u0410 \u0421\u0410\u0419\u0422</a></p>\n            <br>;\n            \n            ')))}))}],[[1,1]]]);
//# sourceMappingURL=main.5942c27c.chunk.js.map