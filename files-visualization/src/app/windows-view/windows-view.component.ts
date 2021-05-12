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

  constructor(filePaths: FilePathService, utils: Utils, pathsHttp: FilePathHttpService) { 
    this.utils = utils;
    this.pathsHttp = pathsHttp;
    this.paths = filePaths.pathsParsed;
    this.foldersWithContent = filePaths.foldersWithContent;
    // this.folderIndex = 0;
    this.rootDir = utils.getRootDir(this.paths);
    this.oldRootDir = this.rootDir;
    this.detailedList = utils.getDetailesForEarchFile(this.paths)
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

  ngOnInit(): void {
    // this.pathsHttp.getPaths().subscribe(data => {
    //   console.log("data ------- ", data);
    //   var tree = [[[],[]]];
    //   var tree_root = '';
    //   // console.log(data.length);
    //   let j=0;
    //   for(let i = 0; i < data.length; i++){
    //     //console.log(data[i]['type']);
    //     if(data[i]['type'] === 'folder' && !data[i]['path'].includes('/')){
    //       tree_root = data[i]['path'];
    //       tree[0] = [data[i]['path']];
    //       //console.log(data[i]);
    //     }
    //     // else if(data[i]['type'] === 'folder' && data[i]['path'].includes('/')){
    //     //   if(data[i]['path'].split('/')[0] === tree_root){
    //     //     console.log(tree[0][0].push(['121']));
    //     //     //tree[0][i] = data[i]['path'].split('/')[1];
    //     //     j++;
    //     //   }
    //     // }
    //    /* if(tree_root === data[i]['path'] && data[i]['path'].includes('/') && ){
  
    //     }*/
    //   }
    //   console.log("tree ------- ", tree);

    // })
  }

}
