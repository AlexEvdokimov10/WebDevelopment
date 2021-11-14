import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {UniversityComponent} from "./university/university/university.component";
import {UniversityListComponent} from "./university/university-list/university-list.component";
import {UniversityModule} from "./university/university/university.module";
import {HomeComponent} from "./home/home.component";



@NgModule({
  declarations: [
    AppComponent,HomeComponent,UniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UniversityModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
