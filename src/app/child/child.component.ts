import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() pData : string;
  @Input() pMobile: number;
  // @Input() pcountry: string;
  @Input('pcountry') childCountry: string;


  constructor() { }

  ngOnInit() {
  }

}
