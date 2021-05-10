import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'windows-view',
  templateUrl: './windows-view.component.html',
  styleUrls: ['./windows-view.component.css']
})
export class WindowsViewComponent implements OnInit {

  constructor() { }
  cwd:String = '';
  folderIconUrl:String = 'assets/images/win-icons/folder-icon.png';
  backArrowIconUrl:String = 'assets/images/win-icons/arrow-up-icon.png'
  ngOnInit(): void {
  }

}
