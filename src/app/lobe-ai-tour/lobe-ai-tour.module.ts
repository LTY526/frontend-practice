import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobeAiTourRoutingModule } from './lobe-ai-tour-routing.module';
import { LobeAiTourComponent } from './lobe-ai-tour.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LobeAiTourComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LobeAiTourRoutingModule
  ]
})
export class LobeAiTourModule { }
