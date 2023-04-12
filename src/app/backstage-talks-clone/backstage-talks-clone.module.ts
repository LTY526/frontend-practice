import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackstageTalksCloneRoutingModule } from './backstage-talks-clone-routing.module';
import { BackstageTalksCloneComponent } from './backstage-talks-clone.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    BackstageTalksCloneComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BackstageTalksCloneRoutingModule
  ]
})
export class BackstageTalksCloneModule { }
