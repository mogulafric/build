(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{CqUk:function(t,e,s){"use strict";s.r(e);var i=s("ofXK"),n=s("tyNb"),r=s("J7/z"),a=s("AlMu"),o=s("Olgc"),c=s("Y5SE"),l=s("xHgC"),p=s("5JmO"),d=s.n(p),b=s("TruH"),u=s.n(b),h=s("uIk+"),g=s("fXoL");d.a.vfs=u.a.pdfMake.vfs;let f=(()=>{class t{constructor(t){this.canvas=t}setTitle(t,e,s,i,n,r,a){let o,c;return"A6"===a?(o=[15,10,0,10],c=8):(o=[15,10,0,10],c=10),[{table:{widths:["100%","0%"],body:[[{image:t,alignment:"center",width:60,height:30}],[{text:e,fontSize:c,alignment:"center",bold:!0}],[{text:s,fontSize:c,alignment:"center"}],[{text:i,fontSize:c,alignment:"center",italics:!0}],[{text:n,fontSize:c,alignment:"center",italics:!0}]]},layout:"noBorders"}]}createTableHeader(t){const e={fila_0:{}};return t.forEach((t,s)=>{e.fila_0["col_"+(+s+1)]={text:t,style:"tableHeader",margin:[0,8,0,0]}}),e}createBody(t,e){const s=[];for(const i in t){const e=[];for(const s in t[i])e.push(t[i][s]);s.push(e)}return e.forEach(t=>{const e=[];for(const s in t)e.push(t[s]);s.push(e)}),s}getDocDefinition(t,e,s,i,n,r,a,o,c,l){const p={header:{title:t,header1:e,header2:s,header3:i},body:{header:r,record:a}},d=this.createBody(this.createTableHeader(p.body.header),p.body.record);let b,u,h;return"A6"===l?(b=[10,110,10,55],u=10,h=7):(u=16,h=10,b=[10,110,10,55]),{pageOrientation:o,pageSize:l,pageMargins:b,header:this.setTitle(n,t,e,s,i,p,l),footer:(t,e)=>({text:"Page "+t.toString()+" of "+e,alignment:"center",margin:[0,30,0,0]}),content:[{style:"tableContent",table:{widths:c,headerRows:1,body:d}}],styles:{header:{fontSize:u,bold:!0},tableHeader:{bold:!0},tableContent:{fontSize:h}}}}generatePdf(t){d.a.createPdf(t).print()}getPdfData(t){const e=["50%","50%"],s=["Class Name","Stream"],i=`Date: ${(new Date).toLocaleString()}`;this.canvas.getBase64Image("./assets/images/schoollogo.jpg").then(n=>{this.generatePdf(this.getDocDefinition("ST. FRANCIS OF ASSISI SECONDARY SCHOOL - KALIINI","P.O BOX 30-90121 - Emali","Tel. No.:072127703",i,n,s,this.mapData(t),"portrait",e,"A4"))})}mapData(t){return t.map(t=>({Name:t.unitName,stream:t.streams}))}}return t.\u0275fac=function(e){return new(e||t)(g.Zb(h.a))},t.\u0275prov=g.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=s("fk4S"),S=s("rEr+"),C=s("7zfz"),v=s("3Pt+"),w=s("7kUa");function y(t,e){1&t&&(g.Vb(0,"tr",11),g.Vb(1,"th"),g.Ic(2,"Class Name"),g.Ub(),g.Vb(3,"th"),g.Ic(4,"Stream"),g.Ub(),g.Vb(5,"th"),g.Ic(6,"Action"),g.Ub(),g.Ub())}const O=function(t){return["/main/classes/","class-details",t]},U=function(t){return["/main/classes/","class-edit",t]};function I(t,e){if(1&t){const t=g.Wb();g.Vb(0,"tr",11),g.Vb(1,"td"),g.Ic(2),g.Ub(),g.Vb(3,"td"),g.Ic(4),g.Ub(),g.Vb(5,"td"),g.Vb(6,"div",12),g.Vb(7,"button",13),g.Ic(8,"View"),g.Ub(),g.Vb(9,"button",14),g.Ic(10,"Edit"),g.Ub(),g.Vb(11,"button",15),g.dc("click",(function(){g.zc(t);const s=e.$implicit;return g.gc().deleteClass(s._id)})),g.Ic(12,"Delete"),g.Ub(),g.Ub(),g.Ub(),g.Ub()}if(2&t){const t=e.$implicit;g.Db(2),g.Jc(t.unitName),g.Db(2),g.Kc(" ",null==t.streams[0]?null:t.streams[0].streamName," "),g.Db(3),g.nc("routerLink",g.qc(4,O,t._id)),g.Db(2),g.nc("routerLink",g.qc(6,U,t._id))}}const P=function(){return[5,10,25,50,100]},A=[{path:"",component:(()=>{class t{constructor(t,e,s,i,n){this.dialogService=t,this.toastService=e,this.applicationStateService=s,this.pdfService=i,this.classesService=n,this.classes=[],this.isMobileResolution=!1}ngOnInit(){this.isMobileResolution=this.applicationStateService.getIsMobileResolution(),this.pageSize=10,this.columns=[{field:"unitName",header:"Class Name"},{field:"streams",header:"Stream"}],this.getclasss()}getclasss(){this.classesService.getClasses().subscribe(t=>{this.classes=t.data,this.toastService.addSingle("success","Classes Loaded","")},t=>{this.toastService.addSingle("error","sorry, we could not find the data","contact the admin for assistance")})}openNew(){this.dialogService.open(c.a,{data:{},width:this.isMobileResolution?"400px":"600px"}).onClose.subscribe(t=>{t&&this.toastService.addSingle("success","panel closed","")})}exportPdf(){this.pdfService.getPdfData(this.classes)}}return t.\u0275fac=function(e){return new(e||t)(g.Pb(r.a),g.Pb(o.a),g.Pb(a.a),g.Pb(f),g.Pb(l.a))},t.\u0275cmp=g.Jb({type:t,selectors:[["app-class-list"]],features:[g.Cb([r.a])],decls:15,vars:10,consts:[["legend","Classes",3,"toggleable"],["pRipple","",1,"btn","btn-success","btn-sm","m-1",3,"click"],["pRipple","","type","button","icon","pi pi-file-excel","tooltipPosition","bottom",1,"btn","btn-info","btn-sm","mx-2",3,"click"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","resizableColumns","scrollable","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],[1,"ui-g"],[1,"ui-g-10","ui-sm-8"],[2,"float","right"],[1,"ui-g-2","ui-sm-4"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"text-sm"],[1,"flex"],["pRipple","",1,"btn","btn-info","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-primary","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(t,e){1&t&&(g.Vb(0,"p-fieldset",0),g.Vb(1,"div"),g.Vb(2,"button",1),g.dc("click",(function(){return e.openNew()})),g.Ic(3,"Create New class"),g.Ub(),g.Vb(4,"button",2),g.dc("click",(function(){return e.exportPdf()})),g.Ic(5,"Class report"),g.Ub(),g.Ub(),g.Vb(6,"p-table",3),g.Gc(7,y,7,0,"ng-template",4),g.Gc(8,I,13,8,"ng-template",5),g.Ub(),g.Vb(9,"div",6),g.Vb(10,"div",7),g.Vb(11,"label",8),g.Ic(12,"Page Size:"),g.Ub(),g.Ub(),g.Vb(13,"div",9),g.Vb(14,"input",10),g.dc("ngModelChange",(function(t){return e.pageSize=t})),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.nc("toggleable",!0),g.Db(6),g.nc("value",e.classes)("paginator",!0)("resizableColumns",!0)("scrollable",!0)("rows",e.pageSize)("showCurrentPageReport",!0)("rowsPerPageOptions",g.pc(9,P)),g.Db(8),g.nc("ngModel",e.pageSize))},directives:[m.a,S.c,C.e,v.b,w.a,v.k,v.n,n.d],styles:[""]}),t})()}];let R=(()=>{class t{}return t.\u0275mod=g.Nb({type:t}),t.\u0275inj=g.Mb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(A)],n.g]}),t})();var z=s("EQGD"),V=s("K0h9");s.d(e,"ClassListModule",(function(){return k}));let k=(()=>{class t{}return t.\u0275mod=g.Nb({type:t}),t.\u0275inj=g.Mb({factory:function(e){return new(e||t)},imports:[[i.b,R,V.a,z.a]]}),t})()},Olgc:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("fXoL"),n=s("7zfz");let r=(()=>{class t{constructor(t){this.messageService=t}addSingle(t,e,s){this.messageService.add({severity:t,summary:e,detail:s})}addMultiple(t){this.messageService.addAll(t)}clear(){this.messageService.clear()}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(n.d))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xHgC:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("tk/3"),n=s("z6cu"),r=s("JIr8"),a=s("AytR"),o=s("fXoL");let c=(()=>{class t{constructor(t){this.httpClient=t,this.apiURL=a.a.apiUrl,this.httpOptions={headers:new i.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}getClasses(){return this.httpClient.get(this.apiURL+"/units/getallunits",this.httpOptions).pipe(Object(r.a)(this.errorHandler))}getClass(t){return this.httpClient.get(`${this.apiURL}/units/getunit/${t}`,this.httpOptions).pipe(Object(r.a)(this.errorHandler))}createClass(t){return this.httpClient.post(`${this.apiURL}/units/registerunit`,JSON.stringify(t),this.httpOptions).pipe(Object(r.a)(this.errorHandler))}updateClass(t,e){return this.httpClient.patch(`${this.apiURL}/units/updateunit`,JSON.stringify(e),this.httpOptions).pipe(Object(r.a)(this.errorHandler))}deleteClass(t){return this.httpClient.delete(`${this.apiURL}/units/archive/${t}`,this.httpOptions).pipe(Object(r.a)(this.errorHandler))}errorHandler(t){let e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e=`Server Side Error Code: ${t.status}\n Message: ${t.message}`,console.log(e)),Object(n.a)(console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(i.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);