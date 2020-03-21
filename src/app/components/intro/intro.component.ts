import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class IntroComponent implements OnInit {

  color = {color: "white"};

  constructor() { }

  ngOnInit(): void {
  }

}
