import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {homeRouting} from './home-rounting.module';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    MatButtonModule
  ],
  declarations: [MainPageComponent, HeaderComponent, FooterComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class HomeModule { }
