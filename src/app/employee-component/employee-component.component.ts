import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  employee = {
    id: 1,
    name: 'Akshay Patel'
  };
}
