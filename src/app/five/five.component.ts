import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor() { }
  arrayVal:number[]=[1,2,3,5];
  ngOnInit(): void {
  }

}
