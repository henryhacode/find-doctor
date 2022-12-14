import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ValidPhonePipe } from './valid-phone.pipe';


@NgModule({
  declarations: [
    PatientComponent,
    ValidPhonePipe
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule
  ]
})
export class PatientModule { }
