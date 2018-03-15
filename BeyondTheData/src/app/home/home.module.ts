import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {homeRouting} from './home-rounting.module';
@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [MainPageComponent]
})
export class HomeModule { }
