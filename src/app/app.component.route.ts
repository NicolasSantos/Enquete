import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'poll/cadastro',
    pathMatch: 'full'
  },
  {
    path: 'poll',
    loadChildren: 'app/lazy-modules/poll/poll.module#PollModule',
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routeConfig, {useHash:true});
