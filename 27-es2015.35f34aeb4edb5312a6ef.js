(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Olgc:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r("fXoL"),i=r("7zfz");let n=(()=>{class t{constructor(t){this.messageService=t}addSingle(t,e,r){this.messageService.add({severity:t,summary:e,detail:r})}addMultiple(t){this.messageService.addAll(t)}clear(){this.messageService.clear()}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(i.d))},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xC8C:function(t,e,r){"use strict";r.r(e);var s=r("ofXK"),i=r("tyNb"),n=r("tvG+"),o=r("fXoL");const a=[{path:"",component:n.a}];let l=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(a)],i.g]}),t})();r.d(e,"ClassTeacherCreateModule",(function(){return c}));let c=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[s.b,l]]}),t})()},xHgC:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var s=r("tk/3"),i=r("z6cu"),n=r("JIr8"),o=r("AytR"),a=r("fXoL");let l=(()=>{class t{constructor(t){this.httpClient=t,this.apiURL=o.a.apiUrl,this.httpOptions={headers:new s.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}getClasses(){return this.httpClient.get(this.apiURL+"/units/getallunits",this.httpOptions).pipe(Object(n.a)(this.errorHandler))}getClass(t){return this.httpClient.get(`${this.apiURL}/units/getunit/${t}`,this.httpOptions).pipe(Object(n.a)(this.errorHandler))}createClass(t){return this.httpClient.post(`${this.apiURL}/units/registerunit`,JSON.stringify(t),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}updateClass(t,e){return this.httpClient.patch(`${this.apiURL}/units/updateunit`,JSON.stringify(e),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}deleteClass(t){return this.httpClient.delete(`${this.apiURL}/units/archive/${t}`,this.httpOptions).pipe(Object(n.a)(this.errorHandler))}errorHandler(t){let e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e=`Server Side Error Code: ${t.status}\n Message: ${t.message}`,console.log(e)),Object(i.a)(console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(a.Zb(s.a))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);