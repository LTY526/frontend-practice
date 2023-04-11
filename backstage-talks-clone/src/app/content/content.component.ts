import { Component } from '@angular/core';
import { debounce } from 'lodash-decorators';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  list = [
    { color: '#ffffff', textColor: '#e568ac', src: 'assets/backstagetalks_cover_issue_6.png', issue: '6', available: true },
    { color: '#00c1b5', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_5.png', issue: '5', available: true },
    { color: '#ff651a', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_4.png', issue: '4', available: false },
    { color: '#ffbe00', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_3.png', issue: '3', available: true },
    { color: '#1d3fbb', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_2.png', issue: '2', available: true },
    { color: '#e30512', textColor: '#251d20', src: 'assets/backstagetalks_cover_issue_1.png', issue: '1', available: false },
  ];

  @debounce(200)
  onScroll(event: any) {
    // console.log(event)
    // console.log(document.querySelector("[class='content']"))
  }
}
