(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{E0oT:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),a=n("tyNb"),r=n("J7/z"),o=n("AlMu"),c=n("Olgc"),s=n("5JmO"),l=n.n(s),b=n("TruH"),d=n.n(b),h=n("uIk+"),p=n("fXoL");l.a.vfs=d.a.pdfMake.vfs;let u=(()=>{class e{constructor(e){this.canvas=e}setTitle(e,t,n,i,a,r,o){let c,s;return"A6"===o?(c=[15,10,0,10],s=8):(c=[15,10,0,10],s=10),[{table:{widths:["100%","0%"],body:[[{image:e,alignment:"center",width:60,height:30}],[{text:t,fontSize:s,alignment:"center",bold:!0}],[{text:n,fontSize:s,alignment:"center"}],[{text:i,fontSize:s,alignment:"center",italics:!0}],[{text:a,fontSize:s,alignment:"center",italics:!0}]]},layout:"noBorders"}]}createTableHeader(e){const t={fila_0:{}};return e.forEach((e,n)=>{t.fila_0["col_"+(+n+1)]={text:e,style:"tableHeader",margin:[0,8,0,0]}}),t}createBody(e,t){const n=[];for(const i in e){const t=[];for(const n in e[i])t.push(e[i][n]);n.push(t)}return t.forEach(e=>{const t=[];for(const n in e)t.push(e[n]);n.push(t)}),n}getDocDefinition(e,t,n,i,a,r,o,c,s,l){const b={header:{title:e,header1:t,header2:n,header3:i},body:{header:r,record:o}},d=this.createBody(this.createTableHeader(b.body.header),b.body.record);let h,p,u;return"A6"===l?(h=[10,110,10,55],p=10,u=7):(p=16,u=10,h=[10,110,10,55]),{pageOrientation:c,pageSize:l,pageMargins:h,header:this.setTitle(a,e,t,n,i,b,l),footer:(e,t)=>({text:"Page "+e.toString()+" of "+t,alignment:"center",margin:[0,30,0,0]}),content:[{style:"tableContent",table:{widths:s,headerRows:1,body:d}}],styles:{header:{fontSize:p,bold:!0},tableHeader:{bold:!0},tableContent:{fontSize:u}}}}generatePdf(e){l.a.createPdf(e).print()}getPdfData(e){const t=["25%","25%","25%","25%"],n=["Title","Name","Role","Phone Number"],i=`Date: ${(new Date).toLocaleString()}`;this.canvas.getBase64Image("./assets/images/schoollogo.jpg").then(a=>{this.generatePdf(this.getDocDefinition("ST. FRANCIS OF ASSISI SECONDARY SCHOOL - KALIINI","P.O BOX 30-90121 - Emali","Tel. No.:072127703",i,a,n,this.mapData(e),"portrait",t,"A4"))})}mapData(e){return e.map(e=>({Title:e.teacherTitle,Name:e.teacherName,Role:e.teacherRole,Contact:e.teacherContact}))}}return e.\u0275fac=function(t){return new(t||e)(p.Zb(h.a))},e.\u0275prov=p.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=n("RK+W"),g=n("7dYx"),m=n("fk4S"),S=n("rEr+"),v=n("7zfz"),w=n("3Pt+"),y=n("7kUa");function P(e,t){if(1&e&&(p.Vb(0,"th"),p.Ic(1),p.Ub()),2&e){const e=t.$implicit;p.Db(1),p.Kc(" ",e.header," ")}}function T(e,t){if(1&e&&(p.Vb(0,"tr",12),p.Gc(1,P,2,1,"th",13),p.Vb(2,"th"),p.Ic(3,"Action"),p.Ub(),p.Ub()),2&e){const e=p.gc();p.Db(1),p.nc("ngForOf",e.columns)}}function U(e,t){if(1&e&&(p.Vb(0,"td"),p.Vb(1,"div"),p.Ic(2),p.Ub(),p.Ub()),2&e){const e=t.$implicit,n=p.gc().$implicit;p.Db(2),p.Jc(n[e.field])}}const V=function(e){return["/main/teachers/","teacher-details",e]},I=function(e){return["/main/teachers/","teacher-edit",e]};function R(e,t){if(1&e){const e=p.Wb();p.Vb(0,"tr",12),p.Gc(1,U,3,1,"td",13),p.Vb(2,"td"),p.Vb(3,"div",14),p.Vb(4,"button",15),p.Ic(5,"View"),p.Ub(),p.Vb(6,"button",16),p.Ic(7,"Edit"),p.Ub(),p.Vb(8,"button",17),p.dc("click",(function(){p.zc(e);const n=t.$implicit;return p.gc().deleteTeacher(n._id)})),p.Ic(9,"Delete"),p.Ub(),p.Ub(),p.Ub(),p.Ub()}if(2&e){const e=t.$implicit,n=p.gc();p.Db(1),p.nc("ngForOf",n.columns),p.Db(3),p.nc("routerLink",p.qc(3,V,e._id)),p.Db(2),p.nc("routerLink",p.qc(5,I,e._id))}}function D(e,t){1&e&&(p.Vb(0,"tr"),p.Vb(1,"td"),p.Ic(2,"No data found."),p.Ub(),p.Ub())}const z=function(){return[5,10,25,50,100]},k=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a){this.dialogService=e,this.toastService=t,this.applicationStateService=n,this.teachersService=i,this.pdfService=a,this.teachers=[],this.isMobileResolution=!1}ngOnInit(){this.isMobileResolution=this.applicationStateService.getIsMobileResolution(),this.pageSize=10,this.columns=[{field:"teacherTitle",header:"Title"},{field:"teacherName",header:"Name"},{field:"teacherRole",header:"Role"},{field:"teacherContact",header:"Phone Number"}],this.getTeachers()}getTeachers(){this.teachersService.getTeachers().subscribe(e=>{this.teachers=e.data,this.toastService.addSingle("success","data Loaded","")},e=>{this.toastService.addSingle("error","sorry, we could not find the data","contact the admin for assistance")})}openNew(){this.dialogService.open(f.a,{data:{},width:this.isMobileResolution?"400px":"600px"}).onClose.subscribe(e=>{e&&this.toastService.addSingle("success","panel closed","")})}exportPdf(){this.pdfService.getPdfData(this.teachers)}}return e.\u0275fac=function(t){return new(t||e)(p.Pb(r.a),p.Pb(c.a),p.Pb(o.a),p.Pb(g.a),p.Pb(u))},e.\u0275cmp=p.Jb({type:e,selectors:[["app-teacher-list"]],features:[p.Cb([r.a])],decls:16,vars:10,consts:[["legend","Teachers",3,"toggleable"],["pRipple","",1,"btn","btn-success","btn-sm","m-1",3,"click"],["pRipple","","type","button","icon","pi pi-file-excel","tooltipPosition","bottom",1,"btn","btn-info","btn-sm","mx-2",3,"click"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","resizableColumns","scrollable","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"ui-g"],[1,"ui-g-10","ui-sm-8"],[2,"float","right"],[1,"ui-g-2","ui-sm-4"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"text-sm"],[4,"ngFor","ngForOf"],[1,"flex"],["pRipple","",1,"btn","btn-info","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-primary","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,t){1&e&&(p.Vb(0,"p-fieldset",0),p.Vb(1,"div"),p.Vb(2,"button",1),p.dc("click",(function(){return t.openNew()})),p.Ic(3,"Create Teacher"),p.Ub(),p.Vb(4,"button",2),p.dc("click",(function(){return t.exportPdf()})),p.Ic(5,"Teacher report"),p.Ub(),p.Ub(),p.Vb(6,"p-table",3),p.Gc(7,T,4,1,"ng-template",4),p.Gc(8,R,10,7,"ng-template",5),p.Gc(9,D,3,0,"ng-template",6),p.Ub(),p.Vb(10,"div",7),p.Vb(11,"div",8),p.Vb(12,"label",9),p.Ic(13,"Page Size:"),p.Ub(),p.Ub(),p.Vb(14,"div",10),p.Vb(15,"input",11),p.dc("ngModelChange",(function(e){return t.pageSize=e})),p.Ub(),p.Ub(),p.Ub(),p.Ub()),2&e&&(p.nc("toggleable",!0),p.Db(6),p.nc("value",t.teachers)("paginator",!0)("rows",t.pageSize)("resizableColumns",!0)("scrollable",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",p.pc(9,z)),p.Db(9),p.nc("ngModel",t.pageSize))},directives:[m.a,S.c,v.e,w.b,y.a,w.k,w.n,i.j,a.d],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=p.Nb({type:e}),e.\u0275inj=p.Mb({factory:function(t){return new(t||e)},imports:[[a.g.forChild(k)],a.g]}),e})();var C=n("EQGD"),N=n("K0h9");n.d(t,"TeacherListModule",(function(){return O}));let O=(()=>{class e{}return e.\u0275mod=p.Nb({type:e}),e.\u0275inj=p.Mb({factory:function(t){return new(t||e)},imports:[[i.b,x,N.a,C.a]]}),e})()},Olgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),a=n("7zfz");let r=(()=>{class e{constructor(e){this.messageService=e}addSingle(e,t,n){this.messageService.add({severity:e,summary:t,detail:n})}addMultiple(e){this.messageService.addAll(e)}clear(){this.messageService.clear()}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(a.d))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);