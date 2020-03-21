import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lightblueColor = {color:'none'};
  lightgreenColor = {color:'none'};

  constructor() { }

  ngOnInit(): void {
  }

}
// [style.background-color]="{ color: '#60E7CC'}" 