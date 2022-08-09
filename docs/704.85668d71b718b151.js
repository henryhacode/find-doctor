"use strict";(self.webpackChunkFindDoctor=self.webpackChunkFindDoctor||[]).push([[704],{6704:(I,p,l)=>{l.r(p),l.d(p,{ProfilePatientModule:()=>N});var u=l(6895),f=l(3060),t=l(4650),h=l(4536),_=l(9943),P=l(1026),s=l(3546),g=l(4859),m=l(9549),d=l(4144),c=l(4006);function v(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"input",12),t.NdJ("change",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.changeImage(o))}),t.qZA()}}function C(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.uploadAvatar())}),t._uU(1,"Update Avatar"),t.qZA()}}function x(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.editAvatar())}),t._uU(1,"Change Avatar"),t.qZA()}}function M(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"input",14),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.fullname=o)}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.s9C("value",null==n.patient?null:n.patient.fullname),t.Q6J("ngModel",n.fullname)}}function T(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"input",15),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.fullname=o)}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.s9C("value",null==n.patient?null:n.patient.fullname),t.Q6J("ngModel",n.fullname)}}function Z(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"input",16),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.phone=o)}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.s9C("value",null==n.patient?null:n.patient.phone),t.Q6J("ngModel",n.phone)}}function A(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"input",17),t.NdJ("ngModelChange",function(o){t.CHM(n);const r=t.oxw();return t.KtG(r.phone=o)}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.s9C("value",null==n.patient?null:n.patient.phone),t.Q6J("ngModel",n.phone)}}function J(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",13),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.edit())}),t._uU(2,"Edit"),t.qZA(),t.BQk()}}function b(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.save())}),t._uU(2,"Save"),t.qZA(),t.BQk()}}const y=[{path:"",component:(()=>{class e{constructor(n,i,o){this.profileService=n,this.userService=i,this.uploadFileService=o,this.patient=null,this.isEdit=!1,this.fullname="Full Name",this.avatarUrl="https://material.angular.io/assets/img/examples/shiba1.jpg",this.phone="",this.isAvatarEditing=!1,this.file=null,this.getInfoPatient()}getInfoPatient(){let n=this.userService.getUserState()?.username;n&&this.profileService.getPatientInfo(n).subscribe(i=>{console.log(i),this.patient=i,this.avatarUrl=this.patient.avatarurl,this.phone=this.patient.phone,this.fullname=this.patient.fullname})}ngOnInit(){}edit(){this.isEdit=!0}save(){this.isEdit=!1;let n=this.userService.getUserState()?.username;n&&this.profileService.updatePatientInfo(n,this.fullname,this.avatarUrl,this.phone).subscribe(i=>{console.log(i),alert("Update Successfully!")})}changeImage(n){this.file=n.target.files[0]}editAvatar(){this.isAvatarEditing=!0}uploadAvatar(){if(this.file){console.log("going to upload file: ",this.file);const n=this.userService.getUserState();this.uploadFileService.uploadPatientAvatar(n,this.file).subscribe(i=>{console.log(i),this.isAvatarEditing=!1,this.patient=i,this.avatarUrl=this.patient.avatarurl,this.phone=this.patient.phone,this.fullname=this.patient.fullname})}else console.log("There is no selected file"),alert("There is no file selected.")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.H),t.Y36(_.K),t.Y36(P.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-patient"]],decls:30,vars:11,consts:[[1,"content-view"],[1,"left"],[1,"avatar"],["mat-card-image","",3,"src"],[2,"color","rgb(40, 57, 133)"],["type","file","accept","image/*","class","file-upload","color","primary",3,"change",4,"ngIf"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],[1,"right"],[1,"update-title"],[1,"edit-form"],["appearance","fill",1,"full-width"],[4,"ngIf"],["type","file","accept","image/*","color","primary",1,"file-upload",3,"change"],["mat-flat-button","","color","primary",3,"click"],["matInput","","placeholder","Full Name","name","fullname","disabled","true",3,"ngModel","value","ngModelChange"],["matInput","","placeholder","Full Name","name","fullname",3,"ngModel","value","ngModelChange"],["matInput","","placeholder","Phone Number","name","phone","disabled","true",3,"ngModel","value","ngModelChange"],["matInput","","placeholder","Phone Number","name","phone",3,"ngModel","value","ngModelChange"],["mat-flat-button","","color","warn",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"div",2)(6,"mat-card-title",4),t._uU(7),t.qZA()(),t.TgZ(8,"div",2),t.YNc(9,v,1,0,"input",5),t.YNc(10,C,2,0,"button",6),t.YNc(11,x,2,0,"button",6),t.qZA()()(),t.TgZ(12,"div",7)(13,"mat-card")(14,"mat-card-title",8),t._uU(15,"Update Profile"),t.qZA(),t.TgZ(16,"form",9)(17,"mat-form-field",10)(18,"mat-label"),t._uU(19,"Full Name"),t.qZA(),t.YNc(20,M,2,2,"ng-container",11),t.YNc(21,T,2,2,"ng-container",11),t.qZA(),t.TgZ(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Phone Number"),t.qZA(),t.YNc(25,Z,2,2,"ng-container",11),t.YNc(26,A,2,2,"ng-container",11),t.qZA(),t.TgZ(27,"div",2),t.YNc(28,J,3,0,"ng-container",11),t.YNc(29,b,3,0,"ng-container",11),t.qZA()()()()()),2&n&&(t.xp6(4),t.Q6J("src",i.avatarUrl,t.LSH),t.xp6(3),t.hij("Username: ",null==i.patient?null:i.patient.username,""),t.xp6(2),t.Q6J("ngIf",i.isAvatarEditing),t.xp6(1),t.Q6J("ngIf",i.isAvatarEditing),t.xp6(1),t.Q6J("ngIf",!i.isAvatarEditing),t.xp6(9),t.Q6J("ngIf",!i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isEdit),t.xp6(4),t.Q6J("ngIf",!i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isEdit),t.xp6(2),t.Q6J("ngIf",!i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isEdit))},dependencies:[u.O5,s.a8,s.n5,s.G2,g.lW,m.KE,m.hX,d.Nt,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F],styles:[".content-view[_ngcontent-%COMP%]{padding:20px;display:flex}.left[_ngcontent-%COMP%]{min-width:300px;width:25%;margin:20px}.avatar[_ngcontent-%COMP%]{padding-top:10px;display:flex;justify-content:center;align-items:center}.right[_ngcontent-%COMP%]{width:70%;margin:20px}.mat-card-image[_ngcontent-%COMP%]{padding:50px;width:200px;height:200px;clip-path:circle(100px at center)}.edit-form[_ngcontent-%COMP%], .full-width[_ngcontent-%COMP%]{width:100%}.update-title[_ngcontent-%COMP%]{padding-top:10px;margin-bottom:50px;color:#283985}.mat-card[_ngcontent-%COMP%]{min-height:400px}.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .mat-input-element[_ngcontent-%COMP%]:disabled{color:gray}.button-update[_ngcontent-%COMP%]{margin:20px;display:flex;justify-content:center;align-items:center}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(y),f.Bz]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,E,s.QW,g.ot,d.c,c.u5]}),e})()}}]);