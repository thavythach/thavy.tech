import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Experience {
  color: string;
  textColor: string;
  cols: number;
  rows: number;
  text: string;
  mainView: boolean;
  leftParallaxView: boolean;
  rightParallaxView: boolean;
}


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],  
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {

  color = { color: 'white'};
  color1 = { color: 'green'};

  experiences: Experience[] = [
    {text: 'One', cols: 1, rows: 4, color: '#0A192F', textColor: 'white', mainView: false, leftParallaxView: true, rightParallaxView: false},
    {text: 'Two', cols: 4, rows: 1, color: '#0A192F', textColor: 'white', mainView: true, leftParallaxView: false, rightParallaxView: false},
    {text: 'Four', cols: 1, rows: 4, color: '#0A192F', textColor: 'white', mainView: false, leftParallaxView: false, rightParallaxView: true},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
