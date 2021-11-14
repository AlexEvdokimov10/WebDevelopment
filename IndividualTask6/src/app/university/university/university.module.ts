import {UniversityComponent} from "./university.component";
import {UniversityListComponent} from "../university-list/university-list.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UniversityRoutingModule} from "./university-routing.module";

@NgModule({
  declarations:[
    UniversityListComponent
  ],
  imports:[
    BrowserModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule{

}
