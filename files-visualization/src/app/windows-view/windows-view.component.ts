import { Component, OnInit } from '@angular/core';
import { FilePathService } from '../services/file-path.service';
import { Utils } from '../utils/utils';

@Component({
  selector: 'windows-view',
  templateUrl: './windows-view.component.html',
  styleUrls: ['./windows-view.component.css']
})
export class WindowsViewComponent implements OnInit {
  cwd: string = '';
  folderIconUrl: string = 'assets/images/win-icons/folder-icon.png';
  backArrowIconUrl: string = 'assets/images/win-icons/arrow-up-icon.png';
  fileIconUrl: string = 'assets/images/win-icons/file-icon.png'
  paths;
  foldersWithContent;
  utils;

  constructor(filePaths: FilePathService, utils: Utils) { 
    this.utils = utils;
    this.paths = filePaths.pathsParsed;
    this.foldersWithContent = filePaths.foldersWithContent;
  }

  defineFileType() {
    console.log("clckeeeeeeeeeeed", this.foldersWithContent);
    // this.paths = [
    //   {
    //     "path": "univercity/faculties/mathematics/doctors.doc",
    //     "modificationDate": "2018-09-09",
    //     "type": "file",
    //     "size": 1.25
    //  },
    //  {
    //     "path": "univercity/faculties/phisics/subjects.txt",
    //     "modificationDate": "2018-10-10",
    //     "type": "file",
    //     "size": 2
    //  },
    // ]
  }

  sortByFieldName(sortBy: string) {
    const sortedContent = this.utils.sortContent(this.paths, sortBy);
    this.paths = sortedContent;
  }

  ngOnInit(): void {
  }

}
