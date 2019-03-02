import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {
  departmentDetails=[{"id":"1","name":"mechanical","description":"mechanical engg."}
  ,{"id":"2","name":"computers","description":"computers engg."}
  ]
  constructor() { }

  ngOnInit() {
  }

}
