import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
interface Date {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  selectedvalue: string="";
  selectedCar: string ="";

  dates: Date[] = [
    {value: 'Date-1', viewValue: 'date: 1 '},
    {value: 'Date-2', viewValue: 'date: 2 '},
    {value: 'Date-3', viewValue: 'date: 3'},
  ];

  

}
