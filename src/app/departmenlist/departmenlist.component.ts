import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmenlist',
  templateUrl: './departmenlist.component.html',
  styleUrls: ['./departmenlist.component.css']
})
export class DepartmenlistComponent implements OnInit {
  departmentDetails=[{"id":"1","name":"mechanical","description":"mechanical engg."}
,{"id":"2","name":"computers","description":"computers engg."}
]
  constructor() { }

  ngOnInit() {
  }

}
