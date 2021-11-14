import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UniversityComponent} from "./university/university/university.component";
import {UniversityListComponent} from "./university/university-list/university-list.component";

const routes:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
