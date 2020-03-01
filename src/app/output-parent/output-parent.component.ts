import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss']
})
export class OutputParentComponent implements OnInit {
  countryData :any;
  showName : string;
  constructor() { }

  ngOnInit() {
  }

  getCountry(event){
    this.countryData = event; 
  }

  getName(event){
    this.showName = event;
  }

}
