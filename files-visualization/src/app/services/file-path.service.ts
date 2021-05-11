import { Injectable } from '@angular/core';
import filePath from '../data/filePath.json';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class FilePathService {
  private _pathsParsed;

  constructor(utils: Utils) {
    this._pathsParsed = utils.parseFilePaths(filePath);
   }

  get pathsParsed() {
    return this._pathsParsed;
  }
}
