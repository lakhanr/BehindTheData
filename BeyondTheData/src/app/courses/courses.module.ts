import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import {homeRouting} from './courses-rounting.module';
@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [ListCoursesComponent]
})
export class CoursesModule { }
