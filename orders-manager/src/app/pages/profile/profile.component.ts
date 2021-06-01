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
  adressForm: FormGroup;
  formEdit: FormGroup;
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
        adress: [ 'One', 'Two'],
        email: res.email,
        name: res.name,
        phone: '',
        picture: res.picture
      };
    });
  }


  open(content: any): void {
    this.submitted = false;
    this.adressForm = this.formBuilder.group({
      adress: ['', [Validators.required]]
    });
    this.modalService.open(content);
  }

  close(): void {
    this.modalService.dismissAll();
  }

  editUserToggle(): void {
    this.editing = !this.editing;
    this.formEdit = this.formBuilder.group({
      phone: [this.user.phone, [ Validators.required]],
      adresses: [this.user.adress]
    });
  }

  saveChanges(): void {
    this.editUserToggle();
    return;
  }

  addAdressToggle(): void{
    this.submitted = true;
    console.log(this.adressForm.invalid);
    console.log(this.adressForm.controls.adress);

    if (this.adressForm.invalid) {
      return;
    }
    this.user.adress.push(this.adressForm.controls.adress.value);  // Insert in DB || Put DB en el suscribe
    this.modalService.dismissAll();
  }




}
