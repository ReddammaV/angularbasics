import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Practice on Angular';
  col = '2';
  firstName: string = "Reddy";
  imgPath: string = 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg';
  isShow: boolean =false;
  isSee: boolean =false;
  enteredData: string = "Aruna";
  isMale: boolean = true;
  isShowVal: boolean = false;
  person: string = "Raghu Mohan";
  myClassType: string = "online";
  mycountry: string = "India";

  constructor(){
    
  }

  ngOnInit() {
  }

  items = [
    {name: "Reddy", mobile: 9566042245, country: "India"},
    {name: "Aruna", mobile: 9052850147, country: "USA"},
    {name: "Mohan", mobile: 88860187740, country: "England"},
  ]

  showAlert(){
    alert("Hello World!");
  }

  showDiv(val: boolean){
    this.isShow = val;
  }

  show(){
    // this.isSee = true;
    this.isSee = !this.isSee;
  }

  changeValue(value: boolean){
    this.isMale = value;
  }

}
