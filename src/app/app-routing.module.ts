import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSelectionComponent } from './page-selection/page-selection.component';

const routes: Routes = [
  {
    path: '',
    component: PageSelectionComponent
  },
  { 
    path: 'abstract-clone', 
    loadChildren: () => import('./abstract-clone/abstract-clone.module').then(m => m.AbstractCloneModule) 
  },
  { 
    path: 'backstage-talks-clone', 
    loadChildren: () => import('./backstage-talks-clone/backstage-talks-clone.module').then(m => m.BackstageTalksCloneModule) 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
