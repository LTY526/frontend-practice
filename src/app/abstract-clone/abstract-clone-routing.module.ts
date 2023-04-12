import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractCloneComponent } from './abstract-clone.component';

const routes: Routes = [{ path: '', component: AbstractCloneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractCloneRoutingModule { }
