import { Component, OnInit } from '@angular/core';
import { FilePathService } from '../services/file-path.service';

@Component({
  selector: 'windows-view',
  templateUrl: './windows-view.component.html',
  styleUrls: ['./windows-view.component.css']
})
export class WindowsViewComponent implements OnInit {
  cwd: string = '';
  folderIconUrl: string = 'assets/images/win-icons/folder-icon.png';
  backArrowIconUrl: string = 'assets/images/win-icons/arrow-up-icon.png';
  paths;

  constructor(filePaths: FilePathService) { 
    this.paths = filePaths.getPaths();
  }

  ngOnInit(): void {
  }

}
