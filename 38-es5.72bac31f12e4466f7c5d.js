function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{K0h9:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("EQGD"),n=i("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=n.Nb({type:e}),e.\u0275inj=n.Mb({factory:function(t){return new(t||e)},imports:[[r.a]]}),e}()},xHgC:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("tk/3"),n=i("z6cu"),a=i("JIr8"),o=i("AytR"),c=i("fXoL"),s=function(){var e=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.apiURL=o.a.apiUrl,this.httpOptions={headers:new r.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}return _createClass(e,[{key:"getClasses",value:function(){return this.httpClient.get(this.apiURL+"/units/getallunits",this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"getClass",value:function(e){return this.httpClient.get("".concat(this.apiURL,"/units/getunit/").concat(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"createClass",value:function(e){return this.httpClient.post("".concat(this.apiURL,"/units/registerunit"),JSON.stringify(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"updateClass",value:function(e,t){return this.httpClient.patch("".concat(this.apiURL,"/units/updateunit"),JSON.stringify(t),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"deleteClass",value:function(e){return this.httpClient.delete("".concat(this.apiURL,"/units/archive/").concat(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"errorHandler",value:function(e){var t="";return e.error instanceof ErrorEvent?(t=e.error.message,console.log("Client Side Error",t)):(t="Server Side Error Code: ".concat(e.status,"\n Message: ").concat(e.message),console.log(t)),Object(n.a)(console.log(t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(r.a))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},yxaE:function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),n=i("tyNb"),a=i("6zJa"),o=i("J4Hm"),c=i("xHgC"),s=i("+wT4"),l=i("fXoL"),u=i("3Pt+"),b=i("24YL");function p(e,t){if(1&e&&(l.Vb(0,"option",27),l.Ic(1),l.Ub()),2&e){var i=t.$implicit;l.nc("value",i._id),l.Db(1),l.Lc(" ",i.beginsAt,"/",i.endsAt," ")}}function d(e,t){if(1&e&&(l.Vb(0,"option",27),l.Ic(1),l.Ub()),2&e){var i=t.$implicit;l.nc("value",i._id),l.Db(1),l.Kc(" ",i.termName," ")}}function m(e,t){if(1&e&&(l.Vb(0,"option",27),l.Ic(1),l.Ub()),2&e){var i=t.$implicit;l.nc("value",i._id),l.Db(1),l.Kc(" ",i.unitName," ")}}var f,h,v=[{path:"",component:(f=function(){function e(t,i,r,n,a,o,c,s,l){var u=this;_classCallCheck(this,e),this.location=t,this.router=i,this.ngZone=r,this.examSetUpService=n,this.termService=a,this.yearService=o,this.classService=c,this.formBuilder=s,this.actRoute=l,this.history=[],this.examSetUp=[],this.academicTerms=[],this.academicYears=[],this.classes=[],this._id=this.actRoute.snapshot.paramMap.get("_id"),this.examSetUpService.getExamSetup(this._id).subscribe((function(e){u.examSetUp=e.data,u.editForm.patchValue(e.data)})),this.editForm=this.formBuilder.group({_id:[""],examName:[""],examCode:[""],termID:[""],yearID:[""],unitID:[""],examDescription:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getTermService(),this.getYearService(),this.getClassService()}},{key:"getTermService",value:function(){var e=this;this.termService.getTerms().subscribe((function(t){e.academicTerms=t.data}))}},{key:"getYearService",value:function(){var e=this;this.yearService.getYears().subscribe((function(t){e.academicYears=t.data}))}},{key:"getClassService",value:function(){var e=this;this.classService.getClasses().subscribe((function(t){e.classes=t.data}))}},{key:"onSubmit",value:function(e){var t=this;this.examSetUpService.updateExamSetup(this._id,e.value).subscribe((function(){t.ngZone.run((function(){return t.router.navigateByUrl("/main/examSetUps")}))}),(function(e){console.log(e)}))}},{key:"Cancel",value:function(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/examSetUps")}}]),e}(),f.\u0275fac=function(e){return new(e||f)(l.Pb(r.g),l.Pb(n.c),l.Pb(l.A),l.Pb(s.a),l.Pb(a.a),l.Pb(o.a),l.Pb(c.a),l.Pb(u.c),l.Pb(n.a))},f.\u0275cmp=l.Jb({type:f,selectors:[["app-exam-set-up-edit"]],decls:53,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"card","card-info"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["formControlName","_id","id","_id","type","hidden"],[1,"row"],[1,"col-sm-6"],[1,"form-group"],["for","examName"],["formControlName","examName","id","examName","type","text",1,"form-control"],["for","examCode"],["formControlName","examCode","type","number","id","examCode",1,"form-control"],["for","yearID"],["formControlName","yearID","id","yearID",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","termID"],["formControlName","termID","id","termID",1,"form-control"],[1,"class-group"],["for","unitID"],["formControlName","unitID","id","unitID",1,"form-control"],["for","examDescription"],["type","text","formControlName","examDescription","id","examDescription",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-info","mx-2",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[3,"value"]],template:function(e,t){1&e&&(l.Qb(0,"app-header-breadcrumb"),l.Vb(1,"form",0),l.dc("ngSubmit",(function(){return t.onSubmit(t.editForm)})),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"h5",3),l.Ic(5," Update ExamSetUp"),l.Ub(),l.Ub(),l.Vb(6,"div",4),l.Qb(7,"input",5),l.Vb(8,"div",6),l.Vb(9,"div",7),l.Vb(10,"div",8),l.Vb(11,"label",9),l.Ic(12,"Exam Name:"),l.Ub(),l.Qb(13,"input",10),l.Ub(),l.Ub(),l.Vb(14,"div",7),l.Vb(15,"div",8),l.Vb(16,"label",11),l.Ic(17,"Exam Code"),l.Ub(),l.Qb(18,"input",12),l.Ub(),l.Ub(),l.Vb(19,"div",7),l.Vb(20,"div",8),l.Vb(21,"label",13),l.Ic(22,"Academic Year"),l.Ub(),l.Vb(23,"select",14),l.Vb(24,"option",15),l.Ic(25,"-- Select academicYear --"),l.Ub(),l.Gc(26,p,2,3,"option",16),l.Ub(),l.Ub(),l.Ub(),l.Vb(27,"div",7),l.Vb(28,"div",8),l.Vb(29,"label",17),l.Ic(30,"Academic Term"),l.Ub(),l.Vb(31,"select",18),l.Vb(32,"option",15),l.Ic(33,"-- Select AcademicTerm --"),l.Ub(),l.Gc(34,d,2,2,"option",16),l.Ub(),l.Ub(),l.Ub(),l.Vb(35,"div",7),l.Vb(36,"div",19),l.Vb(37,"label",20),l.Ic(38,"Class"),l.Ub(),l.Vb(39,"select",21),l.Vb(40,"option",15),l.Ic(41,"-- Select class --"),l.Ub(),l.Gc(42,m,2,2,"option",16),l.Ub(),l.Ub(),l.Ub(),l.Vb(43,"div",7),l.Vb(44,"div",8),l.Vb(45,"label",22),l.Ic(46,"Exam Description"),l.Ub(),l.Qb(47,"input",23),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(48,"div",24),l.Vb(49,"button",25),l.Ic(50,"Update"),l.Ub(),l.Vb(51,"button",26),l.dc("click",(function(){return t.Cancel()})),l.Ic(52,"Cancel"),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Db(1),l.nc("formGroup",t.editForm),l.Db(25),l.nc("ngForOf",t.academicYears),l.Db(8),l.nc("ngForOf",t.academicTerms),l.Db(8),l.nc("ngForOf",t.classes),l.Db(7),l.nc("disabled",!t.editForm.valid))},directives:[b.a,u.w,u.l,u.f,u.b,u.k,u.e,u.p,u.t,u.o,u.v,r.j],styles:[""]}),f)}],C=((h=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:h}),h.\u0275inj=l.Mb({factory:function(e){return new(e||h)},imports:[[n.g.forChild(v)],n.g]}),h),U=i("EQGD"),g=i("K0h9");i.d(t,"ExamSetUpEditModule",(function(){return S}));var y,S=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:y}),y.\u0275inj=l.Mb({factory:function(e){return new(e||y)},imports:[[r.b,C,U.a,g.a]]}),y)}}]);