import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    MainComponent,
    TopBarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
