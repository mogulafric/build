function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{ioxV:function(e,n,t){"use strict";t.r(n);var r,o,i=t("ofXK"),a=t("tyNb"),l=t("fXoL"),u=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l.Jb({type:r,selectors:[["app-parents"]],decls:1,vars:0,template:function(e,n){1&e&&l.Qb(0,"router-outlet")},directives:[a.h],styles:[""]}),r),c=[{path:"",redirectTo:"parent-list"},{path:"parent-list",component:u,loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(50)]).then(t.bind(null,"KLHr")).then((function(e){return e.ParentListModule}))}},{path:"parent-edit/:_id",component:u,loadChildren:function(){return Promise.all([t.e(0),t.e(69)]).then(t.bind(null,"Rf6G")).then((function(e){return e.ParentEditModule}))}},{path:"parent-create",component:u,loadChildren:function(){return Promise.all([t.e(0),t.e(49)]).then(t.bind(null,"C5nF")).then((function(e){return e.ParentCreateModule}))}},{path:"parent-details/:_id",component:u,loadChildren:function(){return Promise.all([t.e(0),t.e(68)]).then(t.bind(null,"HPfh")).then((function(e){return e.ParentDetailsModule}))}}],s=((o=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:o}),o.\u0275inj=l.Mb({factory:function(e){return new(e||o)},imports:[[a.g.forChild(c)],a.g]}),o),f=t("EQGD");t.d(n,"ParentsModule",(function(){return d}));var p,d=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:p}),p.\u0275inj=l.Mb({factory:function(e){return new(e||p)},imports:[[i.b,s,f.a]]}),p)}}]);