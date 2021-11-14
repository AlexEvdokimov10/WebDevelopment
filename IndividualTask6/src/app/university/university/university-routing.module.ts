import {UniversityComponent} from "./university.component";
import {UniversityListComponent} from "../university-list/university-list.component";
import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";

const routes:Routes=[
  {path:"university",component:UniversityListComponent},
  {path:"university/:id",component:UniversityComponent}
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UniversityRoutingModule{

}
