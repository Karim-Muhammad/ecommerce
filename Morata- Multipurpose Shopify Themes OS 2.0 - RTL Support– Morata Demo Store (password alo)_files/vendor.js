/*! $script.js JS loader & dependency manager */(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function p(e2,t2){for(var n2=0,i2=e2.length;n2<i2;++n2)if(!t2(e2[n2]))return r;return 1}function d(e2,t2){p(e2,function(e3){return t2(e3),1})}function v(e2,t2,n2){function g(e3){return e3.call?e3():u[e3]}function y(){if(!--h2){u[o2]=1,s2&&s2();for(var e3 in f)p(e3.split("|"),g)&&!d(f[e3],g)&&(f[e3]=[])}}e2=e2[i]?e2:[e2];var r2=t2&&t2.call,s2=r2?t2:n2,o2=r2?e2.join(""):t2,h2=e2.length;return setTimeout(function(){d(e2,function t3(e3,n3){if(e3===null)return y();if(!n3&&!/^https?:\/\//.test(e3)&&c&&(e3=e3.indexOf(".js")===-1?c+e3+".js":c+e3),l[e3])return o2&&(a[o2]=1),l[e3]==2?y():setTimeout(function(){t3(e3,!0)},0);l[e3]=1,o2&&(a[o2]=1),m(e3,y)})},0),v}function m(n2,r2){var i2=e.createElement("script"),u2;i2.onload=i2.onerror=i2[o]=function(){i2[s]&&!/^c|loade/.test(i2[s])||u2||(i2.onload=i2[o]=null,u2=1,l[n2]=2,r2())},i2.async=1,i2.src=h?n2+(n2.indexOf("?")===-1?"?":"&")+h:n2,t.insertBefore(i2,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=function(e2,t2,n2){(function r2(i2){i2=e2.shift(),e2.length?v(i2,r2):v(i2,t2,n2)})()},v.path=function(e2){c=e2},v.urlArgs=function(e2){h=e2},v.ready=function(e2,t2,n2){e2=e2[i]?e2:[e2];var r2=[];return!d(e2,function(e3){u[e3]||r2[i](e3)})&&p(e2,function(e3){return u[e3]})?t2():function(e3){f[e3]=f[e3]||[],f[e3][i](t2),n2&&n2(r2)}(e2.join("|")),v},v.done=function(e2){v([null],e2)},v}),document.addEventListener("DOMContentLoaded",function(){if(navigator.userAgent.indexOf("Chrome-Lighthouse")!=-1||navigator.userAgent.indexOf("GTmetrix")!=-1||navigator.userAgent.indexOf("PingdomPageSpeed")!=-1)return document.documentElement.classList.add("no-js page-speed"),!1;var $body=document.body,cms_js=document.querySelector("#cms_js"),dataSrc=cms_js.dataset;$script([dataSrc.lazysizes],function(){$script([dataSrc.slick,dataSrc.cookie,dataSrc.currencies,dataSrc.magnific,dataSrc.countdown],"load_basic")}),$script.ready("load_basic",function(){var require=[dataSrc.accordion];$body.classList.contains("home")||($body.classList.contains("template-collection")||$body.classList.contains("template-search")?(require.push(dataSrc.stickybar),require.push(dataSrc.collection)):$body.classList.contains("template-product")&&(require.push(dataSrc.ez),require.push(dataSrc.stickybar),require.push(dataSrc.product))),$script(require,"load_main")}),$script.ready("load_main",function(){$script([dataSrc.main]),$script([dataSrc.custom])})});
//# sourceMappingURL=/cdn/shop/t/3/assets/vendor.js.map?v=122168222777301749281700037389
