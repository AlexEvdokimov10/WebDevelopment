import {Component} from "@angular/core";

@Component({
selector:'app-first',
  templateUrl:'./first.component.html',
  styleUrls:['fist.component.scss']
})
export class FirstComponent{
pathVal:string="./assets/pictures/onePanchman.jpg";
numberVal:number=10;
arrayVal:number[]=[1,2,3,5];
objectVal={
  name:"Alex",
  lastName:'Evdokimov',
  age:19
}
}
