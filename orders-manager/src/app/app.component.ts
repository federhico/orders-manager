import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orders-manager';

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((res) => {
      console.log(res);
      if (res !== true) {
        this.router.navigate(['/login']);
      }
    });
    this.authService.user$.subscribe((res) => {
      console.log(res);
    });
  }
}
