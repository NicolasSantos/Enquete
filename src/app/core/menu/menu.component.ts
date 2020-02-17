import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public path: string;

  constructor(private router: Router, private app_service: AppService) {
    this.path = '';
  }

  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      this.path = event.url;
    });
  }

  public changePage(page){
    if (this.path){
      this.app_service.showSpinner();
    }
    this.router.navigate([page]);
  }
}
