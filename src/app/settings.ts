import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

export class Settings {
  public static api_url = 'http://enqueteapi.luxfacta.com';

  public static extractData(res: Response): any {
    let body: any;
    body = res.json();
    return body || { };
  }

  public static handleError (error: any): any {
    let errMsg: any;
    errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
