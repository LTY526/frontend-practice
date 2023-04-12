import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobeAiTourComponent } from './lobe-ai-tour.component';

const routes: Routes = [{ path: '', component: LobeAiTourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobeAiTourRoutingModule { }
