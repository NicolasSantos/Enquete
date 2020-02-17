import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule, RouterModule, BrowserAnimationsModule, ToastrModule.forRoot({timeOut: 8000}),
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class CoreModule { }
