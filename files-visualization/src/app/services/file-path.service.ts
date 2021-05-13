import { Injectable } from '@angular/core';
import filePath from '../data/filePath.json';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class FilePathService {
  private _pathsParsed; 
  private _foldersWithContent;

  constructor(utils: Utils) {
    this._pathsParsed = utils.parseFilePaths(filePath);
    this._foldersWithContent = utils.parseFolderContent(this.pathsParsed);
   }

  get pathsParsed() {
    return this._pathsParsed;
  }

  get foldersWithContent() {
    return this._foldersWithContent;
  }
}
