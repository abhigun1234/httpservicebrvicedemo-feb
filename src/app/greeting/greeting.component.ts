import { Component, OnInit } from '@angular/core';
import {GreetingsService} from '../greetings.service'
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
   public id;
   public content;
  constructor(public service :GreetingsService) { }

  ngOnInit() {
  }
  public greetings()
  {

    this.service.greetings().subscribe(res=>{


      console.log(res.id)
      console.log(res.content)

      this.id=res.id
      this.content=res.content
    })
   // console.log(this.data)
  }
}
