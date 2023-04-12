import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackstageTalksCloneComponent } from './backstage-talks-clone.component';

const routes: Routes = [{ path: '', component: BackstageTalksCloneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackstageTalksCloneRoutingModule { }
