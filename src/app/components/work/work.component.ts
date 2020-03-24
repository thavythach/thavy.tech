import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Experience {
  title: string;
  company: string;
  start: string;
  end: string;
  details: string[];
  logo: string;
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
  test = [];

  experiences: Experience[] = [
    {title: "Software Engineer", company: "IBM", start: "January 2020", end: "Present", details: 
      [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
        "Work with a variety of different languages, platforms, and frameworks, such as: JavaScript, Angular, Java, and OracleDB.",
      ], logo: "../../../assets/ibm.gif"
    },
    {title: "Computer Scientist", company: "Missile Defense Agency", start: "July 2019", end: "December 2019", details: 
      [
        "Developed requirements for AEGIS SSA and C2BMC Specification for overall Command and Control, Battle management, and Communications Mission.",
        "Managed and established new processes, workflows, and improvements around tool administration using JIRA to optimize untracked documentation of 180-day practices.",
        "Implemented a dynamic report tool to drive better Interface Control Document (ICD) and requirement decisions which reduced manual labor lookup by 100%.","Independently optimzied the database design of C2BMC requirements database providing an improved normalized relational mapping from requirements to interfaces.",
      ], logo: "../../../assets/mda.gif"
    },
    {title: "DevOps Intern", company: "Suplari", start: "February 2019", end: "May 2019", details: 
      [
        "Substituted generic SSH login credentials with AWS IAM user system to provide verbose logging & increase efficiency internally.",
        "Developed predictive insights that leverage AI technologies to find predictive information about a companies financial statements",
      ], logo: "../../../assets/suplari.gif"
    },
    {title: "Data Scientist Intern", company: "Honeywell Aerospace", start: "June 2018", end: "August 2018", details: 
      [
        "Designed and developed an analytics tool that visually represents buying behavior on a $1B annual ecommerce platform. Upon completion, this tool identified over ~$250M in sales opportunities by visually identifying high-volume customer behavior within the platform.",
        "Designed and developed a new mobile application platform that supports high-volume self-service traffic representing ~$500K in annual operational savings. This architecture will serve as the foundation for the growth of the mobile app and will enable future savings throughout its utilization.",
        "Designed and developed a labor visualization dashboard that easily identifies the cost of labor within one of Honeywell’s highest producing labor pools. Upon completion, this tool identified ~$2.2M in opportunity where the Honeywell team can eliminate unnecessary spend.",
        "Defined, implemented, and automated Repair & Overhaul time standards which are used to measure performance and drive efficiency, significantly reducing average time spent on repair operations. Produced flexible, visual monitors which empower multiple tiers of management to assess team execution and identify process bottlenecks.",
      ], logo: "../../../assets/honeywell.webp"
    },
    {title: "Mixed reality Systems Development Intern", company: "HIT Lab NZ", start: "April 2018", end: "June 2018", details: 
      [
        "Successfully prototyped version one of a mixed reality solution from scratch to be used to attract hundreds of prospective Product Design Students.","Developed 7 C# scripts using Unity and Vuforia SDK",
        "Solution deployable on any Android, iOS, or limited Head-Mount Display Devices.",
        "Managed high-level decisions regarding budgetary and implementation details, such as: buying a $500 software license.",
      ], logo: "../../../assets/hitlabnz.gif"
    },
    {title: "Data Scientist Intern II", company: "Suplari", start: "December 2017", end: "January 2017", details: 
      [
        "Wrote Transaction Categorization classification solutions producing 99% accuracy correspondence.",
        "Applied Python Scikit-Learn machine learning library to respond to feature detection and tuning of models.",
        "Reduced Sales Analyst workload by 90% by developing a multiclassification solution on datasets ranging from 50K to 1.5M rows."
      ], logo: "../../../assets/suplari.gif"
    },
    {title: "Data Scientist Intern I", company: "Suplari", start: "May 2017", end: "August 2017", details: 
      [
        "Collaborated with the Director of Data Science on vendor normalization classification problem on the design, pipeline, and backend levels",
        "Combined both natural language processing and machine learning algorithms to design and improve previous vendor normalization algorithm",
        "Developed 10 feature functions totaling over 25 features used to create 8 prediction models to predict whether given domain is directory or website",
        "Led a team of freelance data scientists to coordinate tasks related to ground truth and normalization"
      ], logo: "../../../assets/suplari.gif"
    },
    {title: "Jr. Software Development Intern", company: "DevHub", start: "May 2016", end: "August 2016", details: 
      [
        "Introduced 3 Django Management Functions in Python as optimizations using the power of MySQL",
        "Designed and implemented dynamic repository web zone across all private labels using Zendesk API",
        "Implemented new reusable middleware to fix multiple redundancies with global ip configurations",
        "Patched 17 customer facing bugs"
      ], logo: "../../../assets/ibm.gif"
    },
  ];

  public workClick(event){
    console.log("yeet");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
