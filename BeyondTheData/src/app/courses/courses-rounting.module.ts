
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LogisticRegresssionComponent } from './logistic-regresssion/logistic-regresssion.component';
import { NlpComponent } from './nlp/nlp.component';
import { SvmComponent } from './svm/svm.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';

const home_routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-courses',
        component: ListCoursesComponent,
      },
      {
        path: 'nlp',
        component: NlpComponent,
      },
      {
        path: 'svm',
        component: SvmComponent,
      },
      {
        path: 'logistic-regression',
        component: LogisticRegresssionComponent,
      }
    ]
  }
];


export const homeRouting: ModuleWithProviders = RouterModule.forChild(home_routes);
