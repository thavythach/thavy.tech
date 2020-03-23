import { Component, OnInit } from '@angular/core';

export interface Project {
  name: string,
  desc: string,
  featured: boolean,
  external: string,
  tags: string[],
  github: string,
  demo: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = [
    {
      name: "MagusVR",
      desc: "Crafted a Virtual Reality game to play a role as a magician, but with a twist of utilizing only physical hand gestures.",
      featured: true,
      external: "#Projects",
      tags: ["Unity 3D", "C#", "Oculus Rift", "Leap Motion"],
      github: "#Projects",
      demo: "../../../assets/magusvr.jpg"
    },
    {
      name: "UpCrate",
      desc: "Deployed and developed a Laravel web app to demonstrate database integration of a file-sharing schema among multiple users onto an AWS EC2.",
      featured: true,
      external: "#Projects",
      tags: ["Laravel", "PHP", "Oculus Rift", "Leap Motion", "SQLite3"],
      github: "https://github.com/thavythach/UpCrate",
      demo: "../../../assets/upcrate.png"

    },
    {
      name: "Reality Stocks",
      desc: "Designed a React web app to allow hand gestures to navigate through financial stocks using the Leap Motion Hardware SDK.",
      featured: true,
      external: "#Projects",
      tags: ["React", "Leap Motion", "Node.js", "Alphavantage Web API"],
      github: "https://github.com/thavythach/Reality-Stocks",
      demo: "../../../assets/realitystocks.png"

    },
    {
      name: "Embedded Helicopter",
      desc: "Designed a C-based multitasking operating system to make a helicopter fly up an down.",
      featured: false,
      external: "#Projects",
      tags: ["TIVA MicroController", "C", "Oculus Rift", "Leap Motion"],
      github: "https://github.com/thavythach/Embedded-Helicopter",
      demo: "../../../assets/ibm.gif"

    },
    {
      name: "GalleryAR",
      desc: "Worked with the School of Product Design to create a gallery tour application in Augmented Reality.",
      featured: true,
      external: "https://youtu.be/XwlQ4TSUrJk",
      tags: ["Unity 3D", "C#", "Vuforia SDK"],
      github: "https://github.com/thavythach/GalleryAR",
      demo: "../../../assets/galleryar.png"
    },
    {
      name: "AITAR",
      desc: "Used Vuforia AR SDK, Firebase, Fragments to superimpose a health bar onto our world to play attack the player using Android.",
      featured: true,
      external: "#Projects",
      tags: ["Android", "Vuforia SDK", "Firebase", "OpenGL"],
      github: "https://github.com/thavythach/Android-AITAR",
      demo: "../../../assets/aitar.png"
    },
    {
      name: "Packaged Life",
      desc: "Integrated AWS solutions into Python-Flask ecosystem, such as: EC2, Elastic Beanstalk, Route53, DynamoDB, S3 Lambda, SES into product backbone to attempt to scale 500+ users.",
      featured: false,
      external: "#Projects",
      tags: ["Amazon Web Services", "Python", "Flask"],
      github: "#Projects",
      demo: "../../../assets/ibm.gif"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
