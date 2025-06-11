import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private httpClient:HttpClient) {
    this.httpClient.get('http://localhost:3000/api/protected').subscribe({next(data){console.log(data)}});
  }
}
