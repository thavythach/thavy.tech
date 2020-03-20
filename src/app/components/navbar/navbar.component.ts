import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    // TODO: make this work somehow haha.
    // this.matIconRegistry.addSvgIcon("thavy-tech","../../../assets/thavy-tech.svg");
    // this.matIconRegistry.addSvgIcon("thavy-tech", this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/thavy-tech.svg"));
  }

  ngOnInit(): void {
  }

}
