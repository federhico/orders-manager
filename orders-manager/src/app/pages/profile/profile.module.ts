import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';





@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
