
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListCoursesComponent } from './list-courses/list-courses.component';

const home_routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-courses',
        component: ListCoursesComponent,
      }
    ]
  }
];


export const homeRouting: ModuleWithProviders = RouterModule.forChild(home_routes);
