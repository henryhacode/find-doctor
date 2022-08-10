"use strict";(self.webpackChunkFindDoctor=self.webpackChunkFindDoctor||[]).push([[616],{1616:(w,d,a)=>{a.r(d),a.d(d,{PatientModule:()=>Q});var r=a(6895),m=a(3060),t=a(4650),f=a(2340),C=a(529);let P=(()=>{class e{constructor(n){this.http=n}getAppointments(n){return this.http.get(`${f.N.baseUrl}patients/${n}/appointments`)}cancelAppointment(n,o,s){return this.http.patch(`${f.N.baseUrl}patients/${n}/appointments`,{doctorUsername:o,time:s})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=a(9943),M=a(8768),l=a(3546),h=a(4859),x=a(7392),p=a(8255),g=a(1576),v=a(5829);let y=(()=>{class e{transform(n){return`Phone: ${(n="+1"+n).slice(0,2)} (${n.slice(2,5)}) ${n.slice(5,8)}-${n.slice(8)}`}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"validPhone",type:e,pure:!0}),e})();function A(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",4)(1,"h2"),t._uU(2,"You don't have an appointment! Booking now!"),t.qZA(),t.TgZ(3,"button",5),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.booking())}),t._uU(4,"Booking"),t.qZA()()}}const T=function(e){return{"background-image":e}};function O(e,i){if(1&e&&t._UZ(0,"div",17),2&e){const n=t.oxw().$implicit;t.Q6J("ngStyle",t.VKq(1,T,"url("+n.doctor.avatarurl+")"))}}function S(e,i){1&e&&t._UZ(0,"div",18)}function _(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"button",19)(2,"mat-icon",20),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,21)(6,"button",22),t.NdJ("click",function(){t.CHM(n);const s=t.oxw().$implicit,c=t.oxw();return t.KtG(c.deleteAppointment(s.doctor.username,s.time))}),t.TgZ(7,"mat-icon"),t._uU(8,"delete"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Cancel"),t.qZA()()()()}if(2&e){const n=t.MAs(5);t.xp6(2),t.Q6J("matMenuTriggerFor",n)}}function F(e,i){if(1&e&&(t.TgZ(0,"p",23),t._uU(1),t.ALo(2,"validPhone"),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,n.doctor.phone))}}function U(e,i){if(1&e&&(t.TgZ(0,"p",24),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.HOy("Location: ",n.location.street,", ",n.location.city," , ",n.location.state,", ",n.location.zipcode,"")}}const I=function(e,i,n,o,s){return{bookingClass:e,cancelClass:i,confirmClass:n,completeClass:o,missClass:s}};function N(e,i){if(1&e&&(t.TgZ(0,"div",6)(1,"mat-card")(2,"mat-card-header"),t.YNc(3,O,1,3,"div",7),t.YNc(4,S,1,0,"div",8),t.TgZ(5,"mat-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-subtitle"),t._uU(8),t.qZA(),t._UZ(9,"span",9),t.YNc(10,_,11,1,"div",10),t.qZA(),t.TgZ(11,"mat-card-content"),t.YNc(12,F,3,3,"p",11),t.YNc(13,U,2,4,"p",12),t.TgZ(14,"div",13)(15,"span",14),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"span",15),t._uU(19),t.ALo(20,"date"),t.qZA(),t.TgZ(21,"span",16),t._uU(22),t.ALo(23,"titlecase"),t.qZA()()()()()),2&e){const n=i.$implicit,o=t.oxw();t.Q6J("fxFlex",100/o.gridColumns+"%"),t.xp6(3),t.Q6J("ngIf",n.doctor.avatarurl),t.xp6(1),t.Q6J("ngIf",!n.doctor.avatarurl),t.xp6(2),t.Oqu(n.doctor.fullname),t.xp6(2),t.hij("Specialty: ",n.doctor.specialty,""),t.xp6(2),t.Q6J("ngIf","BOOKING"===n.status||"CONFIRMED"===n.status),t.xp6(2),t.Q6J("ngIf",n.doctor.phone),t.xp6(1),t.Q6J("ngIf",n.location),t.xp6(3),t.Oqu(t.xi3(17,12,n.time,"shortTime")),t.xp6(3),t.hij(" ",t.xi3(20,15,n.time,"mediumDate"),""),t.xp6(2),t.Q6J("ngClass",t.qbA(20,I,"BOOKING"===n.status,"CANCELLED"===n.status,"CONFIRMED"===n.status,"COMPLETED"===n.status,"MISSED"===n.status)),t.xp6(1),t.hij(" ",t.lcZ(23,18,n.status),"")}}const J=[{path:"",component:(()=>{class e{constructor(n,o,s,c){this.patientService=n,this.userService=o,this.router=s,this.toast=c,this.appointments=[],this.gridColumns=4,this.getListAppointment()}getListAppointment(){let n=this.userService.getUserState()?.username;n&&this.patientService.getAppointments(n).subscribe(o=>{console.log(o),this.appointments=o},o=>{console.log("get appointments"+o),this.toast.error({detail:"Error Message",summary:"Something went wrong! Try again later!",duration:5e3})})}ngOnInit(){}booking(){this.router.navigate(["/","find-doctors"])}deleteAppointment(n,o){let s=this.userService.getUserState()?.username;s&&this.patientService.cancelAppointment(s,n,o).subscribe(c=>{this.toast.success({detail:"Success Message",summary:c,duration:5e3}),this.getListAppointment()},c=>{console.log("delete appointment"+c),this.toast.error({detail:"Error Message",summary:"Something went wrong! Try again later!",duration:5e3})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P),t.Y36(Z.K),t.Y36(m.F0),t.Y36(M.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-patient"]],decls:6,vars:2,consts:[["class","no-appoint",4,"ngIf"],[1,"content"],["fxLayout","row wrap","fxLayoutGap","20px grid"],["fxFlex.xs","100%","fxFlex.sm","33%",3,"fxFlex",4,"ngFor","ngForOf"],[1,"no-appoint"],["mat-flat-button","","color","primary",3,"click"],["fxFlex.xs","100%","fxFlex.sm","33%",3,"fxFlex"],["mat-card-avatar","","class","header-image",3,"ngStyle",4,"ngIf"],["mat-card-avatar","","class","header-image",4,"ngIf"],[1,"spacer"],[4,"ngIf"],["class","phone",4,"ngIf"],["class","location",4,"ngIf"],[1,"line-bottom"],[2,"font-weight","bold","font-size","17px"],[2,"font-size","13px","color","dimgrey"],[1,"status",3,"ngClass"],["mat-card-avatar","",1,"header-image",3,"ngStyle"],["mat-card-avatar","",1,"header-image"],["mat-icon-button",""],["color","primary",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"phone"],[1,"location"]],template:function(n,o){1&n&&(t.TgZ(0,"h1"),t._uU(1,"List Appointments"),t.qZA(),t.YNc(2,A,5,0,"div",0),t.TgZ(3,"div",1)(4,"div",2),t.YNc(5,N,24,26,"div",3),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",0==o.appointments.length),t.xp6(3),t.Q6J("ngForOf",o.appointments))},dependencies:[r.mk,r.sg,r.O5,r.PC,l.a8,l.dk,l.dn,l.n5,l.$j,l.kc,h.lW,x.Hw,p.VK,p.OP,p.p6,g.xw,g.SQ,g.yH,v.oO,v.Zl,r.rS,r.uU,y],styles:["h1[_ngcontent-%COMP%]{padding-top:20px;padding-left:20px;font-weight:initial;color:#283985}.no-appoint[_ngcontent-%COMP%]{margin:20px;font-weight:initial}.header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.status[_ngcontent-%COMP%]{font-weight:700;margin-right:10px;float:right}.line-bottom[_ngcontent-%COMP%]{padding-top:20px}.bookingClass[_ngcontent-%COMP%]{color:navy}.cancelClass[_ngcontent-%COMP%], .missClass[_ngcontent-%COMP%]{color:red}.completeClass[_ngcontent-%COMP%]{color:#d2691e}.confirmClass[_ngcontent-%COMP%]{color:green}.location[_ngcontent-%COMP%]{font-weight:lighter;font-size:small;color:gray}.phone[_ngcontent-%COMP%]{font-weight:lighter;font-size:small}.content[_ngcontent-%COMP%]{padding:20px}.content[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]}),e})()}];let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(J),m.Bz]}),e})();var Y=a(782),$=a(7331),b=a(9814);let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,L,l.QW,h.ot,Y.N6,$.Hi,x.Ps,p.Tx,b.o9]}),e})()}}]);