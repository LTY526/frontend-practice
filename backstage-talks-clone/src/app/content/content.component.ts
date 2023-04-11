import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit {
  list = [
    { color: '#ffffff', textColor: '#e568ac', src: 'assets/backstagetalks_cover_issue_6.png', issue: '6', available: true, selected: false },
    { color: '#00c1b5', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_5.png', issue: '5', available: true, selected: false },
    { color: '#ff651a', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_4.png', issue: '4', available: false, selected: false },
    { color: '#ffbe00', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_3.png', issue: '3', available: true, selected: false },
    { color: '#1d3fbb', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_2.png', issue: '2', available: true, selected: false },
    { color: '#e30512', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_1.png', issue: '1', available: false, selected: false },
  ];

  ngAfterViewInit(): void {
    this.onScroll();
  }

  // Can probably debounce the function
  onScroll() {
    const innerHeight = window.innerHeight;
    const container = document.querySelector('.content-container') as HTMLElement;
    if (!Number.isInteger(container.scrollTop / innerHeight)) {
      return;
    }
    container.style.backgroundColor = this.list[container.scrollTop / innerHeight].color;
    this.list.forEach(item => item.selected = false);
    this.list[container.scrollTop / innerHeight].selected = true;
  }
}
