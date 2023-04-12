import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-backstage-talks-clone',
  templateUrl: './backstage-talks-clone.component.html',
  styleUrls: ['./backstage-talks-clone.component.scss']
})
export class BackstageTalksCloneComponent {
  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Backstage Talks Clone');
  }
}
