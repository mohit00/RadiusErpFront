(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{G8N1:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r("HDdC"),s=r("lJxs"),o=r("JIr8"),n=r("AytR"),i=r("8Y7J"),l=r("IheW"),p=r("iInd");const c=(()=>{class e{constructor(e,t){this._http=e,this.router=t,this.BASE_URL=n.a.LOCAL_BASE}htmlTOPdf(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"report/pdf",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}paymentTermGet(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`paymentTerm/get/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderGetByPm(){let e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+"workorder/getpmwo",{headers:e}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanworkorderGetByPm(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`pm/list/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}paymentTermDetail(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`paymentTerm/getDetail/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}paymentTermCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"paymentTerm/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}paymentTermUpdate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(n.a.LOCAL_BASE+"paymentTerm/update",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}siteMaterialGet(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`sitematerial/get/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}siteMaterialDetail(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`sitematerial/getDetail/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}siteMaterialCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"sitematerial/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}siteMaterialUpdate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(n.a.LOCAL_BASE+"sitematerial/update",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderGet(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`workorder/get/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderBothComGet(e,t){let r={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`workorder/get/${e}/company/${t}`,{headers:r}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderComapnyGet(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`workorder/getcompany/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderReport(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`report/wo/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderGetByUser(){let e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+"workorder/get/byUser",{headers:e}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderAppendList(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`workorder/getAppendWorkOrder/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}workorderDetail(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`workorder/getDetail/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>(alert("Something went wrong ;)"),a.a.throw(e))))}workorderCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"workorder/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>(alert("Something went wrong ;)"),a.a.throw(e))))}workorderUpdate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(n.a.LOCAL_BASE+"workorder/Update",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>(alert("Something went wrong ;)"),a.a.throw(e))))}workorderAppend(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(n.a.LOCAL_BASE+"workorder/Append",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>(alert("Something went wrong ;)"),a.a.throw(e))))}chalanCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"chalan/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>(alert("Something went wrong ;)"),a.a.throw(e))))}}return e.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new e(i["\u0275\u0275inject"](l.c),i["\u0275\u0275inject"](p.p))},token:e,providedIn:"root"}),e})()},HATs:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r("HDdC"),s=r("lJxs"),o=r("JIr8"),n=r("AytR"),i=r("8Y7J"),l=r("IheW"),p=r("iInd");const c=(()=>{class e{constructor(e,t){this._http=e,this.router=t,this.BASE_URL=n.a.LOCAL_BASE}htmlTOPdf(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"report/pdf",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"chalan/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanUpdate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(n.a.LOCAL_BASE+"chalan/update",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanDetail(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`chalan/detail/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanStatus(e,t){let r={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`chalan/status/${e}/${t}`,{headers:r}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}poCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"po/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanOutApprove(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+`po/Approve/${e}`,e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanList(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`chalan/list/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanOutList(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`po/out/list/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanOutApproveList(e,t){let r={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`po/out/Approve/${e}/company/${t}`,{headers:r}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanpmList(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`po/pm/list/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanPoCreate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(n.a.LOCAL_BASE+"chalan/po/create",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanPoUpdate(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(n.a.LOCAL_BASE+"chalan/po/update",e,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanPoList(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`chalan/po/list/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanOutDetail(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`po/detail/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanPoDetail(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`chalan/po/detail/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanOutreportData(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`report/chalan/out/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanInreportData(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`report/chalan/in/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanPoreportData(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(n.a.LOCAL_BASE+`report/chalan/po/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}chalanPoDeleteData(e){let t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.delete(n.a.LOCAL_BASE+`chalan/po/delete/${e}`,{headers:t}).pipe(Object(s.a)(e=>e),Object(o.a)(e=>a.a.throw(e)))}}return e.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new e(i["\u0275\u0275inject"](l.c),i["\u0275\u0275inject"](p.p))},token:e,providedIn:"root"}),e})()},MBfO:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n});var a=r("8Y7J"),s=(r("8P0U"),r("SVse")),o=(r("IP0z"),r("Xd0L"),r("cUpR"),r("omvX"),a["\u0275crt"]({encapsulation:2,styles:[".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],data:{}}));function n(e){return a["\u0275vid"](2,[a["\u0275qud"](671088640,1,{_primaryValueBar:0}),(e()(),a["\u0275eld"](1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(e()(),a["\u0275eld"](2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(e()(),a["\u0275eld"](3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(e()(),a["\u0275eld"](4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(e()(),a["\u0275eld"](5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(e()(),a["\u0275eld"](6,0,null,null,2,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),a["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[a.ElementRef,a.KeyValueDiffers,a.Renderer2]),a["\u0275did"](8,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(e()(),a["\u0275eld"](9,0,[[1,0],["primaryValueBar",1]],null,2,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),a["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[a.ElementRef,a.KeyValueDiffers,a.Renderer2]),a["\u0275did"](11,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(e()(),a["\u0275eld"](12,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(e,t){var r=t.component;e(t,8,0,r._bufferTransform()),e(t,11,0,r._primaryTransform())},function(e,t){var r=t.component;e(t,3,0,r.progressbarId),e(t,5,0,r._rectangleFillValue)})}},gbKz:function(e,t,r){!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;var r=9007199254740991;function a(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function s(e){return"number"==typeof e&&Math.abs(e)<=r}var o=/(hundred|thousand|(m|b|tr|quadr)illion)$/,n=/teen$/,i=/y$/,l=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,p={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function c(e){return o.test(e)||n.test(e)?e+"th":i.test(e)?e.replace(i,"ieth"):l.test(e)?e.replace(l,h):e}function h(e,t){return p[t]}var m=10,g=100,u=1e3,b=1e6,d=1e9,f=1e12,O=1e15,w=9007199254740992,y=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],S=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function _(e,t){var r,o=parseInt(e,10);if(!a(o))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!s(o))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");return r=function e(t){var r,a,s=arguments[1];return 0===t?s?s.join(" ").replace(/,$/,""):"zero":(s||(s=[]),t<0&&(s.push("minus"),t=Math.abs(t)),t<20?(r=0,a=y[t]):t<g?(r=t%m,a=S[Math.floor(t/m)],r&&(a+="-"+y[r],r=0)):t<u?(r=t%g,a=e(Math.floor(t/g))+" hundred"):t<b?(r=t%u,a=e(Math.floor(t/u))+" thousand,"):t<d?(r=t%b,a=e(Math.floor(t/b))+" million,"):t<f?(r=t%d,a=e(Math.floor(t/d))+" billion,"):t<O?(r=t%f,a=e(Math.floor(t/f))+" trillion,"):t<=w&&(r=t%O,a=e(Math.floor(t/O))+" quadrillion,"),s.push(a),e(r,s))}(o),t?c(r):r}var A={toOrdinal:function(e){var t=parseInt(e,10);if(!a(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!s(t))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");var r=String(t),o=Math.abs(t%100),n=11<=o&&o<=13,i=r.charAt(r.length-1);return r+(n?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:_,toWordsOrdinal:function(e){return c(_(e))}};e.exports&&(t=e.exports=A),t.numberToWords=A}()}}]);