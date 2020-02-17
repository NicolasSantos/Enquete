import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {routeConfig} from './app.component.route';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, RouterModule.forRoot(routeConfig,{useHash: true}), HttpModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
