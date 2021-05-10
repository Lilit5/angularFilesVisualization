import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'windows-view',
  templateUrl: './windows-view.component.html',
  styleUrls: ['./windows-view.component.css']
})
export class WindowsViewComponent implements OnInit {

  constructor() { }
  cwd:String = '';
  ngOnInit(): void {
  }

}
