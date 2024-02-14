import { Component, OnInit } from '@angular/core';
import { MyApiService } from './my-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  entries: any;
  constructor(private myApiService: MyApiService) { }

  ngOnInit() {
    this.myApiService.fetchData().subscribe(response => {
      this.data = response;
      this.entries = response.entries;
      console.log(this.entries);
    });
  }
  
}