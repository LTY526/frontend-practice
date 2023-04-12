import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractCloneRoutingModule } from './abstract-clone-routing.module';
import { AbstractCloneComponent } from './abstract-clone.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AbstractCloneComponent,
    TopBarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    AbstractCloneRoutingModule
  ]
})
export class AbstractCloneModule { }
