import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AppComponent} from './app.component'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://api.myjson.com/bins/j052g')
  }

  getUser(userId) {
    return this.http.get('https://api.myjson.com/bins/j052g/'+userId)
  }

  getPosts() {
    return this.http.get('https://api.myjson.com/bins/j052g/posts')
  }
}
