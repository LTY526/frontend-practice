import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lobe-ai-tour',
  templateUrl: './lobe-ai-tour.component.html',
  styleUrls: ['./lobe-ai-tour.component.scss']
})
export class LobeAiTourComponent {
  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Lobe AI tour Clone');
  }
}
