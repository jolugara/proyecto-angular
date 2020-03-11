import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
  public url: string;

  constructor() {
    this.url = Global.url;
  }

makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
  // tslint:disable-next-line:only-arrow-functions
  return new Promise(function(resolve, reject) {
    // tslint:disable-next-line:prefer-const
    let formData: any = new FormData();
    // tslint:disable-next-line:prefer-const
    let xhr = new XMLHttpRequest();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {
      formData.append(name, files[i], files[i].name);
    }

    // tslint:disable-next-line:only-arrow-functions
    xhr.onreadystatechange = function() {
      // tslint:disable-next-line:triple-equals
      if (xhr.readyState == 4) {
        // tslint:disable-next-line:triple-equals
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.response);
        }
      }
  // tslint:disable-next-line:semicolon
  }

    xhr.open('POST', url, true);
    xhr.send(formData);
  });
}
}
