import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employeeDetails=[{"name":"ravi","address":"pune","phoneno":"88888"},
  {"name":"ramesh","address":"delhi","phoneno":"99988888"}]
  constructor() { }

  ngOnInit() {
  }

}
