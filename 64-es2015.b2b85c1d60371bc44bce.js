(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{K0h9:function(t,r,e){"use strict";e.d(r,"a",(function(){return b}));var i=e("EQGD"),c=e("fXoL");let b=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(r){return new(r||t)},imports:[[i.a]]}),t})()},gfTa:function(t,r,e){"use strict";e.r(r);var i=e("ofXK"),c=e("tyNb"),b=e("6zJa"),n=e("fXoL"),s=e("24YL");const a=[{path:"",component:(()=>{class t{constructor(t,r,e,i){this.location=t,this.router=r,this.termService=e,this.actRoute=i,this.history=[],this.term=[]}ngOnInit(){this.actRoute.paramMap.subscribe(t=>{this._id=t.get("_id")}),this.termService.getTerm(this._id).subscribe(t=>{this.term=t.data})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/terms")}}return t.\u0275fac=function(r){return new(r||t)(n.Pb(i.g),n.Pb(c.c),n.Pb(b.a),n.Pb(c.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["app-term-details"]],decls:23,vars:2,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],[1,"col-sm-10"],[1,"col-sm-5"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,r){1&t&&(n.Qb(0,"app-header-breadcrumb"),n.Vb(1,"div",0),n.Vb(2,"div",1),n.Vb(3,"h5",2),n.Ic(4,"Term Details"),n.Ub(),n.Ub(),n.Vb(5,"div",3),n.Vb(6,"div",4),n.Vb(7,"div",5),n.Vb(8,"div",4),n.Vb(9,"div",6),n.Vb(10,"strong"),n.Ic(11,"ID"),n.Ub(),n.Ub(),n.Vb(12,"div",6),n.Ic(13),n.Ub(),n.Ub(),n.Vb(14,"div",4),n.Vb(15,"div",6),n.Vb(16,"strong"),n.Ic(17,"Term Name"),n.Ub(),n.Ub(),n.Vb(18,"div",6),n.Ic(19),n.Ub(),n.Ub(),n.Ub(),n.Ub(),n.Ub(),n.Vb(20,"div",7),n.Vb(21,"button",8),n.dc("click",(function(){return r.back()})),n.Ic(22,"Back"),n.Ub(),n.Ub(),n.Ub()),2&t&&(n.Db(13),n.Kc(" : ",r.term.termID," "),n.Db(6),n.Kc(" : ",r.term.termName," "))},directives:[s.a],styles:[""]}),t})()}];let o=(()=>{class t{}return t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({factory:function(r){return new(r||t)},imports:[[c.g.forChild(a)],c.g]}),t})();var d=e("EQGD"),u=e("K0h9");e.d(r,"TermDetailsModule",(function(){return m}));let m=(()=>{class t{}return t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({factory:function(r){return new(r||t)},imports:[[i.b,o,d.a,u.a]]}),t})()}}]);