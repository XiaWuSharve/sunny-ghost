(self["webpackChunkrogra_frontend"]=self["webpackChunkrogra_frontend"]||[]).push([[901],{6901:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Z}});var e=n(3423),a=n(4562),s=n(4886),i=n(5125),o=n(3687),u=n(1357),c=function(){var t=this,r=t._self._c;t._self._setupProxy;return r("div",[r("div",{staticClass:"d-flex align-center"},[r(s.EB,[t._v("注册")]),r(o.Z),r(s.Qq,[t._v(" 已经有账号了？"),r(a.Z,{attrs:{width:"50",to:{name:"login"},plain:""}},[t._v("点击登录")])],1)],1),r(s.ZB,[r(i.Z,{ref:"form",model:{value:t.valid,callback:function(r){t.valid=r},expression:"valid"}},[r(u.Z,{attrs:{label:"用户名",rules:t.defaultRules()},model:{value:t.username,callback:function(r){t.username=r},expression:"username"}}),r(u.Z,{attrs:{label:"密码",type:"password",rules:t.defaultRules()},model:{value:t.password,callback:function(r){t.password=r},expression:"password"}}),r(u.Z,{attrs:{label:"确认密码",type:"password",rules:t.confirmPasswordRules(t.password)},model:{value:t.confirmPassword,callback:function(r){t.confirmPassword=r},expression:"confirmPassword"}}),r("div",{staticClass:"d-flex"},[r(u.Z,{attrs:{label:"验证码",rules:t.defaultRules()},on:{keydown:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.regist.apply(null,arguments)}},model:{value:t.captcha,callback:function(r){t.captcha=r},expression:"captcha"}}),r(e.Z,{attrs:{width:"200"},on:{click:t.changeCaptcha}},[r("captcha-vue",{ref:"captcha",on:{callback:t.captchaComplete}})],1)],1),r(a.Z,{attrs:{loading:t.loading,disabled:!t.valid,block:""},on:{click:t.regist}},[t._v("注册")])],1)],1)],1)},l=[],h=n(2473),d=function(){var t=this,r=t._self._c;t._self._setupProxy;return r("div",{domProps:{innerHTML:t._s(t.image)}})},f=[],p=n(144),g=p.ZP.extend({props:{callback:Function},data(){return{image:""}},mounted(){this.changeCaptcha()},methods:{async changeCaptcha(){const{data:t,hash:r}=await(0,h.an)();this.image=t,this.$emit("callback",r)}}}),v=g,m=n(1001),y=(0,m.Z)(v,d,f,!1,null,null,null),w=y.exports,_=n(8180),b=n(3498),B=p.ZP.extend({components:{CaptchaVue:w},data(){return{valid:!1,username:"",password:"",confirmPassword:"",captcha:"",hash:"",loading:!1}},methods:{defaultRules:b.IH,confirmPasswordRules:b.tU,changeCaptcha(){this.$refs.captcha.changeCaptcha()},captchaComplete(t){this.hash=t,console.log(t)},async regist(){if(this.loading=!0,this.$refs.form.validate()){const t=await(0,h.r2)(this.username,await(0,_.v)(this.password),this.captcha.toUpperCase(),this.hash);t.success&&this.$router.push({name:"login"}),this.$store.commit("showMessage",t)}this.loading=!1}}}),x=B,k=(0,m.Z)(x,c,l,!1,null,null,null),Z=k.exports},487:function(t){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],n=0;n<t.length;n++)r.push(255&t.charCodeAt(n));return r},bytesToString:function(t){for(var r=[],n=0;n<t.length;n++)r.push(String.fromCharCode(t[n]));return r.join("")}}};t.exports=r},1012:function(t){(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,r){return t<<r|t>>>32-r},rotr:function(t,r){return t<<32-r|t>>>r},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var r=0;r<t.length;r++)t[r]=n.endian(t[r]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(t){for(var r=[],n=0,e=0;n<t.length;n++,e+=8)r[e>>>5]|=t[n]<<24-e%32;return r},wordsToBytes:function(t){for(var r=[],n=0;n<32*t.length;n+=8)r.push(t[n>>>5]>>>24-n%32&255);return r},bytesToHex:function(t){for(var r=[],n=0;n<t.length;n++)r.push((t[n]>>>4).toString(16)),r.push((15&t[n]).toString(16));return r.join("")},hexToBytes:function(t){for(var r=[],n=0;n<t.length;n+=2)r.push(parseInt(t.substr(n,2),16));return r},bytesToBase64:function(t){for(var n=[],e=0;e<t.length;e+=3)for(var a=t[e]<<16|t[e+1]<<8|t[e+2],s=0;s<4;s++)8*e+6*s<=8*t.length?n.push(r.charAt(a>>>6*(3-s)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],e=0,a=0;e<t.length;a=++e%4)0!=a&&n.push((r.indexOf(t.charAt(e-1))&Math.pow(2,-2*a+8)-1)<<2*a|r.indexOf(t.charAt(e))>>>6-2*a);return n}};t.exports=n})()},8738:function(t){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},2568:function(t,r,n){(function(){var r=n(1012),e=n(487).utf8,a=n(8738),s=n(487).bin,i=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?s.stringToBytes(t):e.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var o=r.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,h=-1732584194,d=271733878,f=0;f<o.length;f++)o[f]=16711935&(o[f]<<8|o[f]>>>24)|4278255360&(o[f]<<24|o[f]>>>8);o[u>>>5]|=128<<u%32,o[14+(u+64>>>9<<4)]=u;var p=i._ff,g=i._gg,v=i._hh,m=i._ii;for(f=0;f<o.length;f+=16){var y=c,w=l,_=h,b=d;c=p(c,l,h,d,o[f+0],7,-680876936),d=p(d,c,l,h,o[f+1],12,-389564586),h=p(h,d,c,l,o[f+2],17,606105819),l=p(l,h,d,c,o[f+3],22,-1044525330),c=p(c,l,h,d,o[f+4],7,-176418897),d=p(d,c,l,h,o[f+5],12,1200080426),h=p(h,d,c,l,o[f+6],17,-1473231341),l=p(l,h,d,c,o[f+7],22,-45705983),c=p(c,l,h,d,o[f+8],7,1770035416),d=p(d,c,l,h,o[f+9],12,-1958414417),h=p(h,d,c,l,o[f+10],17,-42063),l=p(l,h,d,c,o[f+11],22,-1990404162),c=p(c,l,h,d,o[f+12],7,1804603682),d=p(d,c,l,h,o[f+13],12,-40341101),h=p(h,d,c,l,o[f+14],17,-1502002290),l=p(l,h,d,c,o[f+15],22,1236535329),c=g(c,l,h,d,o[f+1],5,-165796510),d=g(d,c,l,h,o[f+6],9,-1069501632),h=g(h,d,c,l,o[f+11],14,643717713),l=g(l,h,d,c,o[f+0],20,-373897302),c=g(c,l,h,d,o[f+5],5,-701558691),d=g(d,c,l,h,o[f+10],9,38016083),h=g(h,d,c,l,o[f+15],14,-660478335),l=g(l,h,d,c,o[f+4],20,-405537848),c=g(c,l,h,d,o[f+9],5,568446438),d=g(d,c,l,h,o[f+14],9,-1019803690),h=g(h,d,c,l,o[f+3],14,-187363961),l=g(l,h,d,c,o[f+8],20,1163531501),c=g(c,l,h,d,o[f+13],5,-1444681467),d=g(d,c,l,h,o[f+2],9,-51403784),h=g(h,d,c,l,o[f+7],14,1735328473),l=g(l,h,d,c,o[f+12],20,-1926607734),c=v(c,l,h,d,o[f+5],4,-378558),d=v(d,c,l,h,o[f+8],11,-2022574463),h=v(h,d,c,l,o[f+11],16,1839030562),l=v(l,h,d,c,o[f+14],23,-35309556),c=v(c,l,h,d,o[f+1],4,-1530992060),d=v(d,c,l,h,o[f+4],11,1272893353),h=v(h,d,c,l,o[f+7],16,-155497632),l=v(l,h,d,c,o[f+10],23,-1094730640),c=v(c,l,h,d,o[f+13],4,681279174),d=v(d,c,l,h,o[f+0],11,-358537222),h=v(h,d,c,l,o[f+3],16,-722521979),l=v(l,h,d,c,o[f+6],23,76029189),c=v(c,l,h,d,o[f+9],4,-640364487),d=v(d,c,l,h,o[f+12],11,-421815835),h=v(h,d,c,l,o[f+15],16,530742520),l=v(l,h,d,c,o[f+2],23,-995338651),c=m(c,l,h,d,o[f+0],6,-198630844),d=m(d,c,l,h,o[f+7],10,1126891415),h=m(h,d,c,l,o[f+14],15,-1416354905),l=m(l,h,d,c,o[f+5],21,-57434055),c=m(c,l,h,d,o[f+12],6,1700485571),d=m(d,c,l,h,o[f+3],10,-1894986606),h=m(h,d,c,l,o[f+10],15,-1051523),l=m(l,h,d,c,o[f+1],21,-2054922799),c=m(c,l,h,d,o[f+8],6,1873313359),d=m(d,c,l,h,o[f+15],10,-30611744),h=m(h,d,c,l,o[f+6],15,-1560198380),l=m(l,h,d,c,o[f+13],21,1309151649),c=m(c,l,h,d,o[f+4],6,-145523070),d=m(d,c,l,h,o[f+11],10,-1120210379),h=m(h,d,c,l,o[f+2],15,718787259),l=m(l,h,d,c,o[f+9],21,-343485551),c=c+y>>>0,l=l+w>>>0,h=h+_>>>0,d=d+b>>>0}return r.endian([c,l,h,d])};i._ff=function(t,r,n,e,a,s,i){var o=t+(r&n|~r&e)+(a>>>0)+i;return(o<<s|o>>>32-s)+r},i._gg=function(t,r,n,e,a,s,i){var o=t+(r&e|n&~e)+(a>>>0)+i;return(o<<s|o>>>32-s)+r},i._hh=function(t,r,n,e,a,s,i){var o=t+(r^n^e)+(a>>>0)+i;return(o<<s|o>>>32-s)+r},i._ii=function(t,r,n,e,a,s,i){var o=t+(n^(r|~e))+(a>>>0)+i;return(o<<s|o>>>32-s)+r},i._blocksize=16,i._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var e=r.wordsToBytes(i(t,n));return n&&n.asBytes?e:n&&n.asString?s.bytesToString(e):r.bytesToHex(e)}})()},2473:function(t,r,n){"use strict";n.d(r,{an:function(){return s},r2:function(){return o},x4:function(){return i}});var e=n(2399),a=n(1058);async function s(){return(await(0,a.U2)(e.Z.captcha)).data}async function i(t,r){return(0,a.v_)(e.Z.login,{username:t,password:r})}async function o(t,r,n,s){return(0,a.v_)(e.Z.regist,{username:t,password:r,captcha:n,hash:s})}},8180:function(t,r,n){"use strict";n.d(r,{v:function(){return s}});var e=n(2568),a=n.n(e);async function s(t){return a()(`${t}rogra`)}},3498:function(t,r,n){"use strict";n.d(r,{IH:function(){return i},tU:function(){return o}});const e=t=>!!t||"必须填写",a=t=>r=>r.length<=t||`长度不超过${t}`,s=t=>r=>r===t||"密码不一致",i=()=>[e,a(20)],o=t=>[e,a(20),s(t)]},5125:function(t,r,n){"use strict";n(6699);var e=n(7678),a=n(2500),s=n(4712);r["Z"]=(0,e.Z)(a.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput(t){const r=t=>t.$watch("hasError",(r=>{this.$set(this.errorBag,t._uid,r)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(e=>{e&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const r=this.inputs.find((r=>r._uid===t._uid));if(!r)return;const n=this.watchers.find((t=>t._uid===r._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==r._uid)),this.inputs=this.inputs.filter((t=>t._uid!==r._uid)),this.$delete(this.errorBag,r._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})}}]);
//# sourceMappingURL=901.c2ebfd57.js.map