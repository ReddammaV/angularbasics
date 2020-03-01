import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
  @Output() country = new EventEmitter<string>();
  @Output() name = new EventEmitter<string>();
  mycountry = "India";
  myname = "Inderjeet";
  constructor() { }

  ngOnInit() {
  }

  isCountry(){
    this.country.emit(this.mycountry);
  }

  getName(){
    this.name.emit(this.myname);
  }
}
