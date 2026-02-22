import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [NgIf],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  showInfo: boolean = false;

  onMoreInfoClick(): void {
    this.showInfo = !this.showInfo;
  }

}
