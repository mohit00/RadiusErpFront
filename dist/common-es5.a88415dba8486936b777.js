(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{G8N1:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var a=r("6blF"),n=r("67Y/"),o=r("9Z1F"),i=r("AytR"),s=r("CcnG"),c=r("t/Na"),u=r("ZYCi"),p=function(){function t(t,e){this._http=t,this.router=e,this.BASE_URL=i.a.LOCAL_BASE}return t.prototype.htmlTOPdf=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"report/pdf",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.paymentTermGet=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"paymentTerm/get/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderGetByPm=function(){var t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/getpmwo",{headers:t}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanworkorderGetByPm=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"pm/list/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.paymentTermDetail=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"paymentTerm/getDetail/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.paymentTermCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"paymentTerm/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.paymentTermUpdate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(i.a.LOCAL_BASE+"paymentTerm/update",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.siteMaterialGet=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"sitematerial/get/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.siteMaterialDetail=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"sitematerial/getDetail/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.siteMaterialCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"sitematerial/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.siteMaterialUpdate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(i.a.LOCAL_BASE+"sitematerial/update",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderGet=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/get/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderBothComGet=function(t,e){var r={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/get/"+t+"/company/"+e,{headers:r}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderComapnyGet=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/getcompany/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderReport=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"report/wo/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderGetByUser=function(){var t={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/get/byUser",{headers:t}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderAppendList=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/getAppendWorkOrder/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.workorderDetail=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"workorder/getDetail/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return alert("Something went wrong ;)"),a.a.throw(t)}))},t.prototype.workorderCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"workorder/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return alert("Something went wrong ;)"),a.a.throw(t)}))},t.prototype.workorderUpdate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(i.a.LOCAL_BASE+"workorder/Update",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return alert("Something went wrong ;)"),a.a.throw(t)}))},t.prototype.workorderAppend=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(i.a.LOCAL_BASE+"workorder/Append",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return alert("Something went wrong ;)"),a.a.throw(t)}))},t.prototype.chalanCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"chalan/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return alert("Something went wrong ;)"),a.a.throw(t)}))},t.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](c.c),s["\u0275\u0275inject"](u.p))},token:t,providedIn:"root"}),t}()},HATs:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var a=r("6blF"),n=r("67Y/"),o=r("9Z1F"),i=r("AytR"),s=r("CcnG"),c=r("t/Na"),u=r("ZYCi"),p=function(){function t(t,e){this._http=t,this.router=e,this.BASE_URL=i.a.LOCAL_BASE}return t.prototype.htmlTOPdf=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"report/pdf",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"chalan/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanUpdate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(i.a.LOCAL_BASE+"chalan/update",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanDetail=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"chalan/detail/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanStatus=function(t,e){var r={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"chalan/status/"+t+"/"+e,{headers:r}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.poCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"po/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanOutApprove=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"po/Approve/"+t,t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanList=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"chalan/list/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanOutList=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"po/out/list/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanOutApproveList=function(t,e){var r={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"po/out/Approve/"+t+"/company/"+e,{headers:r}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanpmList=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"po/pm/list/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanPoCreate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.post(i.a.LOCAL_BASE+"chalan/po/create",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanPoUpdate=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.put(i.a.LOCAL_BASE+"chalan/po/update",t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanPoList=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"chalan/po/list/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanOutDetail=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"po/detail/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanPoDetail=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"chalan/po/detail/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanOutreportData=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"report/chalan/out/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanInreportData=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"report/chalan/in/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanPoreportData=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.get(i.a.LOCAL_BASE+"report/chalan/po/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.prototype.chalanPoDeleteData=function(t){var e={authorization:"Bearer "+sessionStorage.getItem("access")};return this._http.delete(i.a.LOCAL_BASE+"chalan/po/delete/"+t,{headers:e}).pipe(Object(n.a)(function(t){return t}),Object(o.a)(function(t){return a.a.throw(t)}))},t.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new t(s["\u0275\u0275inject"](c.c),s["\u0275\u0275inject"](u.p))},token:t,providedIn:"root"}),t}()},MBfO:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return i});var a=r("CcnG"),n=(r("Z+uX"),r("Ip0R")),o=(r("Fzqc"),r("Wf4p"),r("ZYjt"),r("wFw1"),a["\u0275crt"]({encapsulation:2,styles:[".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],data:{}}));function i(t){return a["\u0275vid"](2,[a["\u0275qud"](671088640,1,{_primaryValueBar:0}),(t()(),a["\u0275eld"](1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(t()(),a["\u0275eld"](2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(t()(),a["\u0275eld"](3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(t()(),a["\u0275eld"](4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(t()(),a["\u0275eld"](5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(t()(),a["\u0275eld"](6,0,null,null,2,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),a["\u0275prd"](512,null,n["\u0275NgStyleImpl"],n["\u0275NgStyleR2Impl"],[a.ElementRef,a.KeyValueDiffers,a.Renderer2]),a["\u0275did"](8,278528,null,0,n.NgStyle,[n["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(t()(),a["\u0275eld"](9,0,[[1,0],["primaryValueBar",1]],null,2,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),a["\u0275prd"](512,null,n["\u0275NgStyleImpl"],n["\u0275NgStyleR2Impl"],[a.ElementRef,a.KeyValueDiffers,a.Renderer2]),a["\u0275did"](11,278528,null,0,n.NgStyle,[n["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(t()(),a["\u0275eld"](12,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(t,e){var r=e.component;t(e,8,0,r._bufferTransform()),t(e,11,0,r._primaryTransform())},function(t,e){var r=e.component;t(e,3,0,r.progressbarId),t(e,5,0,r._rectangleFillValue)})}},gbKz:function(t,e,r){!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;var r=9007199254740991;function a(t){return!("number"!=typeof t||t!=t||t===1/0||t===-1/0)}function n(t){return"number"==typeof t&&Math.abs(t)<=r}var o=/(hundred|thousand|(m|b|tr|quadr)illion)$/,i=/teen$/,s=/y$/,c=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,u={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function p(t){return o.test(t)||i.test(t)?t+"th":s.test(t)?t.replace(s,"ieth"):c.test(t)?t.replace(c,l):t}function l(t,e){return u[e]}var h=10,m=100,f=1e3,g=1e6,b=1e9,d=1e12,y=1e15,O=9007199254740992,w=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],S=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function _(t,e){var r,o=parseInt(t,10);if(!a(o))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");if(!n(o))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");return r=function t(e){var r,a,n=arguments[1];return 0===e?n?n.join(" ").replace(/,$/,""):"zero":(n||(n=[]),e<0&&(n.push("minus"),e=Math.abs(e)),e<20?(r=0,a=w[e]):e<m?(r=e%h,a=S[Math.floor(e/h)],r&&(a+="-"+w[r],r=0)):e<f?(r=e%m,a=t(Math.floor(e/m))+" hundred"):e<g?(r=e%f,a=t(Math.floor(e/f))+" thousand,"):e<b?(r=e%g,a=t(Math.floor(e/g))+" million,"):e<d?(r=e%b,a=t(Math.floor(e/b))+" billion,"):e<y?(r=e%d,a=t(Math.floor(e/d))+" trillion,"):e<=O&&(r=e%y,a=t(Math.floor(e/y))+" quadrillion,"),n.push(a),t(r,n))}(o),e?p(r):r}var v={toOrdinal:function(t){var e=parseInt(t,10);if(!a(e))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");if(!n(e))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");var r=String(e),o=Math.abs(e%100),i=11<=o&&o<=13,s=r.charAt(r.length-1);return r+(i?"th":"1"===s?"st":"2"===s?"nd":"3"===s?"rd":"th")},toWords:_,toWordsOrdinal:function(t){return p(_(t))}};t.exports&&(e=t.exports=v),e.numberToWords=v}()}}]);