import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";
import { ContentComponent } from './components/content/content.component';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';


import { ContentMainViewComponent } from './components/content-main-view/content-main-view.component';
import { ContentLeftParallaxViewComponent } from './components/content-left-parallax-view/content-left-parallax-view.component';
import { ContentRightParallaxViewComponent } from './components/content-right-parallax-view/content-right-parallax-view.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { TitleComponent } from './components/title/title.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ContentMainViewComponent,
    ContentLeftParallaxViewComponent,
    ContentRightParallaxViewComponent,
    IntroComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    NgxParallaxScrollModule,
    DragDropModule,
    MatGridListModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
