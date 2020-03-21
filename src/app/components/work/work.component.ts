import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Experience {
  title: string;
  company: string;
  start: string;
  end: string;
  details: string[];
  
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
    {title: "Software Engineer", company: "IBM", start: "January 2020", end: "Present", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "Computer Scientist", company: "Missile Defense Agency", start: "July 2019", end: "December 2019", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "DevOps Intern", company: "Suplari", start: "February 2019", end: "May 2019", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "Data Scientist Intern", company: "Honeywell Aerospace", start: "June 2018", end: "August 2018", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "Mixed reality Systems Development Intern", company: "HIT Lab NZ", start: "April 2018", end: "June 2018", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "Data Scientist Intern II", company: "Suplari", start: "December 2017", end: "January 2017", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "Data Scientist Intern I", company: "Suplari", start: "May 2017", end: "August 2017", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },
    {title: "Jr. Software Development Intern", company: "DevHub", start: "May 2016", end: "August 2016", details: 
      [
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
        "Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,",
      ]
    },

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
