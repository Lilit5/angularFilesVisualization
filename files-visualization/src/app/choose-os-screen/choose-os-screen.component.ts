import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choose-os-screen',
  templateUrl: './choose-os-screen.component.html',
  styleUrls: ['./choose-os-screen.component.css']
})
export class ChooseOsScreenComponent implements OnInit {

  constructor() { }

  macImgUrl:string = 'assets/images/mac-os-logo.svg';
  winImgUrl:string = 'assets/images/windows.svg';
  backgroundImgUrl:string = 'assets/images/background.png';

  ngOnInit(): void {
  }

}
