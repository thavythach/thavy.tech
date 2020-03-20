import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  mainView: boolean;
  leftParallaxView: boolean;
  rightParallaxView: boolean;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 80
  };

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 15, color: 'lightblue', mainView: false, leftParallaxView: true, rightParallaxView: false},
    {text: 'Two', cols: 4, rows: 15, color: 'lightgreen', mainView: true, leftParallaxView: false, rightParallaxView: false},
    {text: 'Four', cols: 1, rows: 15, color: '#DDBDF1', mainView: false, leftParallaxView: false, rightParallaxView: true},
  ];

  ngOnInit(): void {
  }

}
