import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  constructor(@Inject(DOCUMENT) public document: Document, public authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated$);
    console.log(this.authService.user$);
  }

}
