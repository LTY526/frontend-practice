import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuExpanded = false;

  toggleMenuExpand() {
    this.menuExpanded = !this.menuExpanded;
  }
}
