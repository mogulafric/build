(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{K0h9:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("EQGD"),r=i("fXoL");let s=(()=>{class e{}return e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({factory:function(t){return new(t||e)},imports:[[n.a]]}),e})()},Olgc:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("fXoL"),r=i("7zfz");let s=(()=>{class e{constructor(e){this.messageService=e}addSingle(e,t,i){this.messageService.add({severity:e,summary:t,detail:i})}addMultiple(e){this.messageService.addAll(e)}clear(){this.messageService.clear()}}return e.\u0275fac=function(t){return new(t||e)(n.Zb(r.d))},e.\u0275prov=n.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"zr/g":function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),r=i("tyNb"),s=i("J7/z"),c=i("AlMu"),o=i("Olgc"),a=i("q180"),l=i("6zJa"),b=i("fXoL"),u=i("fk4S"),d=i("rEr+"),p=i("7zfz"),m=i("3Pt+"),g=i("7kUa");function f(e,t){if(1&e&&(b.Vb(0,"th"),b.Ic(1),b.Ub()),2&e){const e=t.$implicit;b.Db(1),b.Kc(" ",e.header," ")}}function h(e,t){if(1&e&&(b.Vb(0,"tr",10),b.Gc(1,f,2,1,"th",11),b.Vb(2,"th"),b.Ic(3,"Action"),b.Ub(),b.Ub()),2&e){const e=b.gc();b.Db(1),b.nc("ngForOf",e.columns)}}function v(e,t){if(1&e&&(b.Vb(0,"td"),b.Vb(1,"div"),b.Ic(2),b.Ub(),b.Ub()),2&e){const e=t.$implicit,i=b.gc().$implicit;b.Db(2),b.Jc(i[e.field])}}const S=function(e){return["/main/terms/","term-details",e]},w=function(e){return["/main/terms/","term-edit",e]};function U(e,t){if(1&e){const e=b.Wb();b.Vb(0,"tr",10),b.Gc(1,v,3,1,"td",11),b.Vb(2,"td"),b.Vb(3,"div",12),b.Vb(4,"button",13),b.Ic(5,"View"),b.Ub(),b.Vb(6,"button",14),b.Ic(7,"Edit"),b.Ub(),b.Vb(8,"button",15),b.dc("click",(function(){b.zc(e);const i=t.$implicit;return b.gc().deleteTerm(i._id)})),b.Ic(9,"Delete"),b.Ub(),b.Ub(),b.Ub(),b.Ub()}if(2&e){const e=t.$implicit,i=b.gc();b.Db(1),b.nc("ngForOf",i.columns),b.Db(3),b.nc("routerLink",b.qc(3,S,e._id)),b.Db(2),b.nc("routerLink",b.qc(5,w,e._id))}}const V=function(){return[5,10,25,50,100]},y=[{path:"",component:(()=>{class e{constructor(e,t,i,n){this.dialogService=e,this.toastService=t,this.applicationStateService=i,this.termsService=n,this.terms=[],this.isMobileResolution=!1}ngOnInit(){this.isMobileResolution=this.applicationStateService.getIsMobileResolution(),this.pageSize=10,this.columns=[{field:"termName",header:"term Name"},{field:"termID",header:"ID"}],this.getterms()}getterms(){this.termsService.getTerms().subscribe(e=>{this.terms=e.data,this.toastService.addSingle("success","data Loaded","")},e=>{this.toastService.addSingle("error","sorry, we could not find the data","contact the admin for assitance")})}openNew(){this.dialogService.open(a.a,{data:{},width:this.isMobileResolution?"400px":"600px"}).onClose.subscribe(e=>{e&&this.toastService.addSingle("success","panel closed","")})}}return e.\u0275fac=function(t){return new(t||e)(b.Pb(s.a),b.Pb(o.a),b.Pb(c.a),b.Pb(l.a))},e.\u0275cmp=b.Jb({type:e,selectors:[["app-term-list"]],features:[b.Cb([s.a])],decls:13,vars:10,consts:[["legend","Terms",3,"toggleable"],["pRipple","",1,"btn","btn-success","btn-sm","m-1",3,"click"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","resizableColumns","scrollable","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],[1,"ui-g"],[1,"ui-g-10","ui-sm-8"],[2,"float","right"],[1,"ui-g-2","ui-sm-4"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"text-sm"],[4,"ngFor","ngForOf"],[1,"flex"],["pRipple","",1,"btn","btn-info","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-primary","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,t){1&e&&(b.Vb(0,"p-fieldset",0),b.Vb(1,"div"),b.Vb(2,"button",1),b.dc("click",(function(){return t.openNew()})),b.Ic(3,"Create academicTerm"),b.Ub(),b.Ub(),b.Vb(4,"p-table",2),b.Gc(5,h,4,1,"ng-template",3),b.Gc(6,U,10,7,"ng-template",4),b.Ub(),b.Vb(7,"div",5),b.Vb(8,"div",6),b.Vb(9,"label",7),b.Ic(10,"Page Size:"),b.Ub(),b.Ub(),b.Vb(11,"div",8),b.Vb(12,"input",9),b.dc("ngModelChange",(function(e){return t.pageSize=e})),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.nc("toggleable",!0),b.Db(4),b.nc("value",t.terms)("paginator",!0)("resizableColumns",!0)("scrollable",!0)("rows",t.pageSize)("showCurrentPageReport",!0)("rowsPerPageOptions",b.pc(9,V)),b.Db(8),b.nc("ngModel",t.pageSize))},directives:[u.a,d.c,p.e,m.b,g.a,m.k,m.n,n.j,r.d],styles:[""]}),e})()}];let z=(()=>{class e{}return e.\u0275mod=b.Nb({type:e}),e.\u0275inj=b.Mb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(y)],r.g]}),e})();var k=i("EQGD"),I=i("K0h9");i.d(t,"TermListModule",(function(){return M}));let M=(()=>{class e{}return e.\u0275mod=b.Nb({type:e}),e.\u0275inj=b.Mb({factory:function(t){return new(t||e)},imports:[[n.b,z,I.a,k.a]]}),e})()}}]);