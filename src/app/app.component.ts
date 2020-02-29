import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1> Hello Mam, How are you </h1>` ,
  styleUrls: ['./app.component.scss']
  // styles: ['* { color: red; }']
})
export class AppComponent {
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
