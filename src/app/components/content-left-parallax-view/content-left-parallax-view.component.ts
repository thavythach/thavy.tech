import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-content-left-parallax-view',
  templateUrl: './content-left-parallax-view.component.html',
  styleUrls: ['./content-left-parallax-view.component.css']
})
export class ContentLeftParallaxViewComponent implements OnInit {

  constructor() { }

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 80
  };

  ngOnInit(): void {
  }

}
