(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{K0h9:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var i=r("EQGD"),a=r("fXoL");let c=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[i.a]]}),t})()},MggQ:function(t,e,r){"use strict";r.r(e);var i=r("ofXK"),a=r("tyNb"),c=r("J4Hm"),n=r("fXoL"),b=r("24YL");const s=[{path:"",component:(()=>{class t{constructor(t,e,r,i){this.location=t,this.router=e,this.yearService=r,this.actRoute=i,this.history=[],this.year=[]}ngOnInit(){this.actRoute.paramMap.subscribe(t=>{this.yearID=t.get("_id")}),this.yearService.getYear(this.yearID).subscribe(t=>{this.year=t.data})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/years")}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(i.g),n.Pb(a.c),n.Pb(c.a),n.Pb(a.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["app-year-details"]],decls:25,vars:6,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],[1,"col-sm-10"],[1,"col-sm-5"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,e){1&t&&(n.Qb(0,"app-header-breadcrumb"),n.Vb(1,"div",0),n.Vb(2,"div",1),n.Vb(3,"h5",2),n.Ic(4,"AcademicYear Details"),n.Ub(),n.Ub(),n.Vb(5,"div",3),n.Vb(6,"div",4),n.Vb(7,"div",5),n.Vb(8,"div",4),n.Vb(9,"div",6),n.Vb(10,"strong"),n.Ic(11,"Year BeginsAt"),n.Ub(),n.Ub(),n.Vb(12,"div",6),n.Ic(13),n.hc(14,"date"),n.Ub(),n.Ub(),n.Vb(15,"div",4),n.Vb(16,"div",6),n.Vb(17,"strong"),n.Ic(18,"Year EndsAt"),n.Ub(),n.Ub(),n.Vb(19,"div",6),n.Ic(20),n.hc(21,"date"),n.Ub(),n.Ub(),n.Ub(),n.Ub(),n.Ub(),n.Vb(22,"div",7),n.Vb(23,"button",8),n.dc("click",(function(){return e.back()})),n.Ic(24,"Back"),n.Ub(),n.Ub(),n.Ub()),2&t&&(n.Db(13),n.Kc(" : ",n.ic(14,2,e.year.beginsAt)," "),n.Db(7),n.Kc(" : ",n.ic(21,4,e.year.endsAt)," "))},directives:[b.a],pipes:[i.d],styles:[""]}),t})()}];let o=(()=>{class t{}return t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(s)],a.g]}),t})();var d=r("EQGD"),u=r("K0h9");r.d(e,"YearDetailsModule",(function(){return h}));let h=(()=>{class t{}return t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({factory:function(e){return new(e||t)},imports:[[i.b,o,d.a,u.a]]}),t})()}}]);