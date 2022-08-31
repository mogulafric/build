function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{K0h9:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("EQGD"),n=r("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=n.Nb({type:e}),e.\u0275inj=n.Mb({factory:function(t){return new(t||e)},imports:[[i.a]]}),e}()},Olgc:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("fXoL"),n=r("7zfz"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.messageService=t}return _createClass(e,[{key:"addSingle",value:function(e,t,r){this.messageService.add({severity:e,summary:t,detail:r})}},{key:"addMultiple",value:function(e){this.messageService.addAll(e)}},{key:"clear",value:function(){this.messageService.clear()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Zb(n.d))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},Zhy5:function(e,t,r){"use strict";r.r(t);var i=r("ofXK"),n=r("tyNb"),a=r("Olgc"),s=r("xHgC"),c=r("7dYx"),o=r("e0Eu"),l=r("fXoL"),u=r("3Pt+"),h=r("24YL");function b(e,t){if(1&e&&(l.Vb(0,"option",18),l.Ic(1),l.Ub()),2&e){var r=t.$implicit;l.nc("value",r._id),l.Db(1),l.Kc(" ",r.unitName," ")}}function d(e,t){if(1&e&&(l.Vb(0,"option",18),l.Ic(1),l.Ub()),2&e){var r=t.$implicit;l.nc("value",r._id),l.Db(1),l.Kc(" ",r.teacherName," ")}}var f,p,v=[{path:"",component:(f=function(){function e(t,r,i,n,a,s,c,o){var l=this;_classCallCheck(this,e),this.location=t,this.classTeacherService=r,this.teacherService=i,this.classService=n,this.router=a,this.formBuilder=s,this.actRoute=c,this.toastService=o,this.history=[],this.classTeacher=[],this.teachers=[],this.classes=[],this.getId=this.actRoute.snapshot.paramMap.get("_id"),this.classTeacherService.getClassTeacher(this.getId).subscribe((function(e){l.classTeacher=e.data,l.editForm.patchValue(e.data)}),(function(){l.toastService.addSingle("error","sorry, an error occurred try again","if problem persist contact admin")})),this.editForm=this.formBuilder.group({_id:[""],classID:[""],teacherID:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getTeacherService(),this.getClassService()}},{key:"getTeacherService",value:function(){var e=this;this.teacherService.getTeachers().subscribe((function(t){e.teachers=t.data}))}},{key:"getClassService",value:function(){var e=this;this.classService.getClasses().subscribe((function(t){e.classes=t.data}))}},{key:"onSubmit",value:function(e){var t=this;this.classTeacherService.updateClassTeacher(this.getId,e.value).subscribe((function(){t.router.navigateByUrl("/main/classTeacher")}),(function(e){console.log(e)}))}},{key:"Cancel",value:function(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/classTeacher")}}]),e}(),f.\u0275fac=function(e){return new(e||f)(l.Pb(i.g),l.Pb(o.a),l.Pb(c.a),l.Pb(s.a),l.Pb(n.c),l.Pb(u.c),l.Pb(n.a),l.Pb(a.a))},f.\u0275cmp=l.Jb({type:f,selectors:[["app-class-teacher-edit"]],decls:30,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["formControlName","_id","id","_id","type","hidden"],[1,"row"],[1,"col-sm-6"],[1,"form-group"],["for","classID"],["formControlName","classID","id","classID",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","teacherID"],["formControlName","teacherID","id","teacherID",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-info","mx-2",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[3,"value"]],template:function(e,t){1&e&&(l.Qb(0,"app-header-breadcrumb"),l.Vb(1,"form",0),l.dc("ngSubmit",(function(){return t.onSubmit(t.editForm)})),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"h3",3),l.Ic(5," Update ClassTeacher"),l.Ub(),l.Ub(),l.Vb(6,"div",4),l.Qb(7,"input",5),l.Vb(8,"div",6),l.Vb(9,"div",7),l.Vb(10,"div",8),l.Vb(11,"label",9),l.Ic(12,"Class Name"),l.Ub(),l.Vb(13,"select",10),l.Vb(14,"option",11),l.Ic(15,"--Select Class--"),l.Ub(),l.Gc(16,b,2,2,"option",12),l.Ub(),l.Ub(),l.Ub(),l.Vb(17,"div",7),l.Vb(18,"div",8),l.Vb(19,"label",13),l.Ic(20,"Teacher Name"),l.Ub(),l.Vb(21,"select",14),l.Vb(22,"option",11),l.Ic(23,"--Select Teacher--"),l.Ub(),l.Gc(24,d,2,2,"option",12),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(25,"div",15),l.Vb(26,"button",16),l.Ic(27,"Update"),l.Ub(),l.Vb(28,"button",17),l.dc("click",(function(){return t.Cancel()})),l.Ic(29,"Cancel"),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Db(1),l.nc("formGroup",t.editForm),l.Db(15),l.nc("ngForOf",t.classes),l.Db(8),l.nc("ngForOf",t.teachers),l.Db(2),l.nc("disabled",!t.editForm.valid))},directives:[h.a,u.w,u.l,u.f,u.b,u.k,u.e,u.t,u.o,u.v,i.j],styles:[""]}),f)}],g=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:p}),p.\u0275inj=l.Mb({factory:function(e){return new(e||p)},imports:[[n.g.forChild(v)],n.g]}),p),C=r("EQGD"),m=r("K0h9");r.d(t,"ClassTeacherEditModule",(function(){return S}));var y,S=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:y}),y.\u0275inj=l.Mb({factory:function(e){return new(e||y)},imports:[[i.b,g,C.a,m.a]]}),y)},xHgC:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("tk/3"),n=r("z6cu"),a=r("JIr8"),s=r("AytR"),c=r("fXoL"),o=function(){var e=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.apiURL=s.a.apiUrl,this.httpOptions={headers:new i.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}return _createClass(e,[{key:"getClasses",value:function(){return this.httpClient.get(this.apiURL+"/units/getallunits",this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"getClass",value:function(e){return this.httpClient.get("".concat(this.apiURL,"/units/getunit/").concat(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"createClass",value:function(e){return this.httpClient.post("".concat(this.apiURL,"/units/registerunit"),JSON.stringify(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"updateClass",value:function(e,t){return this.httpClient.patch("".concat(this.apiURL,"/units/updateunit"),JSON.stringify(t),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"deleteClass",value:function(e){return this.httpClient.delete("".concat(this.apiURL,"/units/archive/").concat(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"errorHandler",value:function(e){var t="";return e.error instanceof ErrorEvent?(t=e.error.message,console.log("Client Side Error",t)):(t="Server Side Error Code: ".concat(e.status,"\n Message: ").concat(e.message),console.log(t)),Object(n.a)(console.log(t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(i.a))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);