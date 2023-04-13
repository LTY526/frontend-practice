import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobeAiTourRoutingModule } from './lobe-ai-tour-routing.module';
import { LobeAiTourComponent } from './lobe-ai-tour.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    LobeAiTourComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    LobeAiTourRoutingModule
  ]
})
export class LobeAiTourModule { }
