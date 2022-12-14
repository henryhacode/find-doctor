import { Component, OnInit } from '@angular/core';
import {AppointmentPatient} from "../patient/AppointmentPatient";
import {ProfilePatient} from "./ProfilePatient";
import {ProfileService} from "../common/profile.service";
import {UserService} from "../login/user.service";
import { UploadFileService } from '../common/upload-file.service';
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  public patient:ProfilePatient | null = null;
  isEdit: boolean = false;
  fullname: string = 'Full Name';
  avatarUrl = 'assets/images/default_avatar.jpeg';
  phone: string = '';
  isAvatarEditing: boolean = false;
  file: File | null = null;

  constructor(private profileService: ProfileService,
              private userService: UserService,
              private uploadFileService: UploadFileService,
              private toast: NgToastService) {
    this.getInfoPatient()
  }

  getInfoPatient() {
    let username = this.userService.getUserState()?.username;
    if (username) {
      this.profileService.getPatientInfo(username).subscribe(profile => {
        console.log(profile);
        this.patient = profile;
        if (this.patient.avatarurl) {
          this.avatarUrl = this.patient.avatarurl;
        }
        this.phone = this.patient.phone;
        this.fullname = this.patient.fullname;
      })
    }
  }

  ngOnInit(): void {
  }

  edit() {
    this.isEdit = true;
  }

  save() {
    this.isEdit = false;
    let username = this.userService.getUserState()?.username;
    if (this.patient?.fullname === this.fullname && this.patient?.phone === this.phone) {
      this.toast.info({detail: "Info Message", summary: "Data no change. No need update!", duration: 5000});
      return
    }
    if (username) {
      this.profileService.updatePatientInfo(username, this.fullname, this.avatarUrl, this.phone).subscribe(data => {
        console.log(data);
        this.toast.success({detail: 'Success Message', summary:'Update successfully!', duration: 5000});
      })
    }
  }

  changeImage(event: any) {
    this.file = event.target.files[0];
  }

  editAvatar() {
    this.isAvatarEditing = true;
  }

  uploadAvatar() {
    if (this.file) {
      console.log('going to upload file: ', this.file);
      const user = this.userService.getUserState();
      this.uploadFileService.uploadPatientAvatar(user, this.file).subscribe(profile => {
        console.log(profile);
        this.isAvatarEditing = false;
        this.patient = profile;
        if (this.patient.avatarurl) {
          this.avatarUrl = this.patient.avatarurl;
        }
        this.phone = this.patient.phone;
        this.fullname = this.patient.fullname;
        this.toast.success({detail: 'Success Message', summary:'Update avatar successfully!', duration: 5000});
      });
    } else {
      console.log('There is no selected file');
      this.toast.error({detail: 'Error Message', summary:'There is no file selected!', duration: 5000});
    }
  }
}
