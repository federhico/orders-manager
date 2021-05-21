import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filters: string[] = ['Recently Added', 'Favorites', 'Completed', 'Draft', 'Deleted', 'Shared'];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addToggleHandled(): void {
     this.router.navigate(['orderForm']);
  }

}
