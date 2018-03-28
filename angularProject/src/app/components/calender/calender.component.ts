import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  options = [1, 2, 3];
  optionSelected: any;
  constructor() { }

  ngOnInit() {

  }
  onOptionSelected(event) {
    console.log(event);
   }

}
