import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TitleComponent implements OnInit {

  color = { color: '#60E7CC'};
  @Input('title') title: string;
  @Input('title_item') title_item: string;


  constructor() { }

  ngOnInit(): void {
  }

}
