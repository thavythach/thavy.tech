import { Component, OnInit } from '@angular/core';

export interface Tile {
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
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: '#0A192F', textColor: 'white', mainView: false, leftParallaxView: true, rightParallaxView: false},
    {text: 'Two', cols: 4, rows: 6, color: '#0A192F', textColor: 'white', mainView: true, leftParallaxView: false, rightParallaxView: false},
    {text: 'Four', cols: 1, rows: 1, color: '#0A192F', textColor: 'white', mainView: false, leftParallaxView: false, rightParallaxView: true},
  ];

  ngOnInit(): void {
  }

}
