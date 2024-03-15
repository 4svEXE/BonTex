import { Component } from '@angular/core';

@Component({
  selector: 'app-info-nav-bar',
  templateUrl: './info-nav-bar.component.html',
  styleUrls: ['./info-nav-bar.component.scss'],
})
export class InfoNavBarComponent {
  isClosedSubBar: boolean = true;

  toggleSubBar() {
    this.isClosedSubBar = !this.isClosedSubBar;
  }
}
