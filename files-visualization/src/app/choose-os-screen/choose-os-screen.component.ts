import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choose-os-screen',
  templateUrl: './choose-os-screen.component.html',
  styleUrls: ['./choose-os-screen.component.css']
})
export class ChooseOsScreenComponent implements OnInit {

  constructor() { }

  macImgUrl:string = 'assets/images/mac-logo.png';
  winImgUrl:string = 'assets/images/win-logo.png';

  ngOnInit(): void {
  }

}
