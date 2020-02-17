import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  public show_spinner: boolean;

  constructor(private app_service: AppService) {
    this.show_spinner = false;
  }

  ngOnInit() {
    this.app_service.changeSpinnersState.subscribe( show => {
      this.show_spinner = show;
    });
  }
}
