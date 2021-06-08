import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { IUser } from 'src/app/core/models/IUser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user: IUser;
  addressForm: FormGroup;
  formEdit: FormGroup;
  phone: string;
  submitted = false;
  editing = false;

  constructor(private authService: AuthService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((res: any) =>
    {
      this.user = {
        address: [ 'One', 'Two'],
        email: res.email,
        name: res.name,
        phone: '351',
        picture: res.picture
      };
    });
  }


  open(content: any): void {
    this.submitted = false;
    this.addressForm = this.formBuilder.group({
      address: ['', [Validators.required]]
    });
    this.modalService.open(content);
  }

  close(): void {
    this.modalService.dismissAll();
  }

  editUserToggle(): void {
    this.editing = !this.editing;
  }

  saveChanges(): void {
    for (let i = 0; i < this.user.address.length; i++) {
      if ( this.user.address[i] === '') {
        this.user.address.splice( i, 1 );
      }
    }
    this.editUserToggle();


    return;
  }

  addAddressToggle(): void{
    this.submitted = true;
    console.log(this.addressForm.invalid);
    console.log(this.addressForm.controls.address);

    if (this.addressForm.invalid) {
      return;
    }
    this.user.address.push(this.addressForm.controls.address.value);  // Insert in DB || Put DB en el suscribe
    this.modalService.dismissAll();
  }

  trackByFn(index: any, item: any): void {
    return index;
 }




}
