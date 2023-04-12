import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abstract-clone',
  templateUrl: './abstract-clone.component.html',
  styleUrls: ['./abstract-clone.component.scss']
})
export class AbstractCloneComponent {
  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Abstract Clone');
  }
}
