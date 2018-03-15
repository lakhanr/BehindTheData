
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

const home_routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: MainPageComponent,
      }

    ]
  }
];


export const homeRouting: ModuleWithProviders = RouterModule.forChild(home_routes);
