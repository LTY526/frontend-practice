import { Component } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  showOption = false;
  showSearch = false;

  onToggleOption(): void {
    this.showOption = !this.showOption;
  }

  onToggleSearch(): void {
    this.showSearch = !this.showSearch;
  }
}
