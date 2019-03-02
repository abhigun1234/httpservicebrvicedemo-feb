import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers:[EmpService]
})
export class EmployeelistComponent implements OnInit {

  constructor(public empservice:EmpService) {


   }

  ngOnInit() {
    this.empservice.getEmpDetails()
  }

}
