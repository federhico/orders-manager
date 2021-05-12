import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filters: string[] = ['Recently Added','Favorites','Completed','Draft','Deleted','Shared'];
  

  constructor() { }

  ngOnInit(): void {
  }

  addToggleHandled(){
    null;
  }

}
