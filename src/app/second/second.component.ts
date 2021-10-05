import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title="This is component Second"
  objectVal={
    name:"Alex",
    lastName:'Evdokimov',
    age:19
  }
  constructor() { }

  ngOnInit(): void {
  }

}
