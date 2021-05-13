import { Component, OnInit } from '@angular/core';
import { FilePathHttpService } from '../services/file-path-http.service';
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
  refreshIconUrl: string = 'assets/images/win-icons/refresh-icon_sm.png'
  paths;
  foldersWithContent;
  utils;
  // folderIndex: number;
  itemName: string;
  pathsHttp;
  rootDir: string;
  oldRootDir: string;
  detailedList;
  isSearching: boolean;
  searchResutls;
  searchable: string;

  constructor(filePaths: FilePathService, utils: Utils, pathsHttp: FilePathHttpService) { 
    this.utils = utils;
    this.pathsHttp = pathsHttp;
    this.paths = filePaths.pathsParsed;
    this.foldersWithContent = filePaths.foldersWithContent;
    // this.folderIndex = 0;
    this.rootDir = utils.getRootDir(this.paths);
    this.oldRootDir = this.rootDir;
    this.detailedList = utils.getDetailesForEarchFile(this.paths)
    this.isSearching = false;
  }

  changeRoot(root) {
    console.log("clckeeeeeeeeeeed", root);
    this.oldRootDir = this.rootDir;
    if (this.detailedList[root].type === 'folder') {
      this.rootDir = root;
    }
    
  }

  sortByFieldName(sortBy: string) {
    console.log("Sorting ...");
    const sortedContent = this.utils.sortContent(this.foldersWithContent, sortBy);
    this.foldersWithContent = sortedContent;
  }

  refresh() {
    window.location.reload();
}

search() {
  this.searchResutls = this.utils.getSearchResults(this.detailedList, this.searchable);
  console.log("this.searchResutls --- ", this.searchResutls);
  if (this.searchResutls.length < 1) {
    this.searchResutls.push({
      path: "no items found",
      modificationDate: "no items found"
    })
  }
  this.isSearching = true;
  
}

  ngOnInit(): void {
    //  TODO How to get data from json-server asynchronusly when constructor does not support async?
    // this.pathsHttp.getPaths().subscribe(data => {
    //   this.paths = data;
    // })
  }

}
