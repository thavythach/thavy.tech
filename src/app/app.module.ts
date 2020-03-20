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
import { ContentMainViewComponent } from './components/content-main-view/content-main-view.component';
import { ContentLeftParallaxViewComponent } from './components/content-left-parallax-view/content-left-parallax-view.component';
import { ContentRightParallaxViewComponent } from './components/content-right-parallax-view/content-right-parallax-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ContentMainViewComponent,
    ContentLeftParallaxViewComponent,
    ContentRightParallaxViewComponent
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
