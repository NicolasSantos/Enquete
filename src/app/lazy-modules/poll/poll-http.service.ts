import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {IPoll} from '../../interfaces/IPoll';
import {Settings} from '../../settings';
import {Observable} from 'rxjs/Observable';
import {Poll} from '../../models/Poll';
import {Option} from '../../models/Option';


@Injectable()
export class PollHttpService {

  public session: any;

  constructor(private http: Http) { }

  public getPollById(id: number): Observable<IPoll>{
    return this.http.get(Settings.api_url + '/poll/' + id).map(Settings.extractData).catch(Settings.handleError);
    //return this.http.get('https://4ae22833-1f03-48d2-b87f-ccf89c312867.mock.pstmn.io/poll/2036').map(Settings.extractData).catch(Settings.handleError);
  }

  public getPollStatsById(poll_id: number): Observable<IPoll>{
    return this.http.get(Settings.api_url + '/poll/'  + poll_id + '/stats').map(Settings.extractData).catch(Settings.handleError);
    //return this.http.get('https://4ae22833-1f03-48d2-b87f-ccf89c312867.mock.pstmn.io/poll/2036/stats').map(Settings.extractData).catch(Settings.handleError);
  }

  public postPoll(poll: Poll): Observable<IPoll> {
    let body = JSON.stringify(poll);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(Settings.api_url + '/poll', body, options).map(Settings.extractData).catch(Settings.handleError);
    //return this.http.post('https://4ae22833-1f03-48d2-b87f-ccf89c312867.mock.pstmn.io/poll', body, options).map(Settings.extractData).catch(Settings.handleError);
  }

  public postVoteOptionByPoll(poll_id, option: Option): any {
    let body = JSON.stringify(option);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(Settings.api_url + '/poll/' + poll_id + '/vote', body, options).catch(Settings.handleError);
    //return this.http.post('https://4ae22833-1f03-48d2-b87f-ccf89c312867.mock.pstmn.io/poll/2036/vote', body, options).map(Settings.extractData).catch(Settings.handleError);
  }
}
