(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"0tBa":function(t,e,b){"use strict";b.r(e);var i=b("ofXK"),c=b("tyNb"),a=b("+wT4"),r=b("fXoL"),s=b("24YL");const n=[{path:"",component:(()=>{class t{constructor(t,e,b,i){this.location=t,this.router=e,this.examSetUpService=b,this.actRoute=i,this.history=[],this.examSetUp=[]}ngOnInit(){this.actRoute.paramMap.subscribe(t=>{this.setUpID=t.get("_id")}),this.examSetUpService.getExamSetup(this.setUpID).subscribe(t=>{this.examSetUp=t.data})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/examSetUps")}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.g),r.Pb(c.c),r.Pb(a.a),r.Pb(c.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-exam-set-up-details"]],decls:49,vars:11,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],[1,"col-sm-8"],[1,"col-sm-6"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,e){1&t&&(r.Qb(0,"app-header-breadcrumb"),r.Vb(1,"div",0),r.Vb(2,"div",1),r.Vb(3,"h5",2),r.Ic(4," setUp Details"),r.Ub(),r.Ub(),r.Vb(5,"div",3),r.Vb(6,"div",4),r.Vb(7,"div",5),r.Vb(8,"div",4),r.Vb(9,"div",6),r.Vb(10,"strong"),r.Ic(11,"Exam Name:"),r.Ub(),r.Ub(),r.Vb(12,"div",6),r.Ic(13),r.Ub(),r.Ub(),r.Vb(14,"div",4),r.Vb(15,"div",6),r.Vb(16,"strong"),r.Ic(17,"Exam Code:"),r.Ub(),r.Ub(),r.Vb(18,"div",6),r.Ic(19),r.Ub(),r.Ub(),r.Vb(20,"div",4),r.Vb(21,"div",6),r.Vb(22,"strong"),r.Ic(23,"Academic Year:"),r.Ub(),r.Ub(),r.Vb(24,"div",6),r.Ic(25),r.hc(26,"date"),r.hc(27,"date"),r.Ub(),r.Ub(),r.Vb(28,"div",4),r.Vb(29,"div",6),r.Vb(30,"strong"),r.Ic(31,"Academic Term:"),r.Ub(),r.Ub(),r.Vb(32,"div",6),r.Ic(33),r.Ub(),r.Ub(),r.Vb(34,"div",4),r.Vb(35,"div",6),r.Vb(36,"strong"),r.Ic(37,"Class"),r.Ub(),r.Ub(),r.Vb(38,"div",6),r.Ic(39),r.Ub(),r.Ub(),r.Vb(40,"div",4),r.Vb(41,"div",6),r.Vb(42,"strong"),r.Ic(43,"Description:"),r.Ub(),r.Ub(),r.Vb(44,"div",6),r.Ic(45),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(46,"div",7),r.Vb(47,"button",8),r.dc("click",(function(){return e.back()})),r.Ic(48,"Back"),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Db(13),r.Kc(" : ",e.examSetUp.examName," "),r.Db(6),r.Kc(" : ",e.examSetUp.examCode," "),r.Db(6),r.Lc(" : ",r.ic(26,7,e.examSetUp.yearID.beginsAt)," - ",r.ic(27,9,e.examSetUp.yearID.endsAt)," "),r.Db(8),r.Kc(" : ",e.examSetUp.termID.termName," "),r.Db(6),r.Kc(" : ",e.examSetUp.unitID.unitName," "),r.Db(6),r.Kc(" : ",e.examSetUp.examDescription," "))},directives:[s.a],pipes:[i.d],styles:[""]}),t})()}];let o=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(n)],c.g]}),t})();var d=b("EQGD"),U=b("K0h9");b.d(e,"ExamSetUpDetailsModule",(function(){return p}));let p=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[i.b,o,d.a,U.a]]}),t})()},K0h9:function(t,e,b){"use strict";b.d(e,"a",(function(){return a}));var i=b("EQGD"),c=b("fXoL");let a=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[i.a]]}),t})()}}]);