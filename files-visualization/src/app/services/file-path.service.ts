import { Injectable } from '@angular/core';
import filePath from '../data/filePath.json';

@Injectable({
  providedIn: 'root'
})
export class FilePathService {

  constructor() { }

  getPaths() {
    return filePath;
  }
}
