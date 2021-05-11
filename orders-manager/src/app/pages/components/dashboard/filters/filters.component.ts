import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() filters: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.filters)
  }

}
