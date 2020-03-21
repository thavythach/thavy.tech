import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'portfolio';

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 80
  };

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color = "#60E7CC";

  constructor() {
    
  }

}
