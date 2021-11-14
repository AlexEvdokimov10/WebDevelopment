import { Injectable } from '@angular/core';

export interface University{
  id:number;
  name:string;
  city:string;
  quantitySpec:number;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class UniversityDataService {
  private university:University[]=[
    {
      id:1,name:"CHNU",city:"Mykolaiv",quantitySpec:50,description:"Best university in Mykolaiv"
    },
    {
      id:2,name:"NKI",city:"Mykolaiv",quantitySpec:42,description:"It's university specialize in building ship"
    },
    {
      id:3,name:"AGR",city:"Mykolaiv",quantitySpec:21,description:"It's university specialize in agrarian structural "
    },
  ];
  getUnivers():University[]{
    return this.university;
  }
  getUniver(id:number):University | undefined{
    return  this.university.find(elem=>elem.id==id);
  }
}
