import { Component, OnInit } from '@angular/core';
import {University, UniversityDataService} from "../../services/university-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  universities:University[]=[];
  constructor(private universityData:UniversityDataService,private router:Router){
  }

  ngOnInit(): void {
    this.universities=this.universityData.getUnivers();
  }
  selectUniver(univerId:number){
    this.router.navigate(['/university',univerId]);
  }

}
