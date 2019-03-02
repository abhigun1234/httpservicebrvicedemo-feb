import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor(public httpclient:HttpClient) { }

  greetings()
  {
    return this.httpclient.get("http://rest-service.guides.spring.io/greeting")

  }
}
