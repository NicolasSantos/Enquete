import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AppService {

  public changeSpinnersState = new EventEmitter<boolean>(true);

  constructor() {
  }

  public showSpinner(){
    this.changeSpinnersState.emit(true);
  }

  public hideSpinner(){
    this.changeSpinnersState.emit(false);
  }
}
