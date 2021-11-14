import { Component, OnInit } from '@angular/core';
import {University,UniversityDataService} from "../../services/university-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  university:University|undefined;
  constructor(private univerData:UniversityDataService,private activatedRoute:ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    const univerId=this.activatedRoute.snapshot.params['id'];
    this.university=this.univerData.getUniver(univerId)
  }
  goBack(){
    this.router.navigate(['/university']);
  }

}
