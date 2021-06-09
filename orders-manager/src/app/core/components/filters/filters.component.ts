import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() filters: string[];
  @Output() filterEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  toggleFilterHandled(filter: string): void {
    this.filterEvent.emit(filter);
  }



}
