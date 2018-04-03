import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import {homeRouting} from './courses-rounting.module';
import { LogisticRegresssionComponent } from './logistic-regresssion/logistic-regresssion.component';
import { NlpComponent } from './nlp/nlp.component';
import { SvmComponent } from './svm/svm.component';
import {MatButtonModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    MatButtonModule
  ],
  declarations: [ListCoursesComponent, LogisticRegresssionComponent, NlpComponent, SvmComponent],
  exports: [ListCoursesComponent]
})
export class CoursesModule { }
