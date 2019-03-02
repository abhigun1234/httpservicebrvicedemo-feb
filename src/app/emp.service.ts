import { Injectable } from '@angular/core';

@Injectable()
export class EmpService {
  employeeDetails=[{"name":"ravi","address":"pune","phoneno":"88888"},
  {"name":"ramesh","address":"delhi","phoneno":"99988888"}]
  constructor() { }

  public getEmpDetails()
  {

    return this.employeeDetails
  }

}
