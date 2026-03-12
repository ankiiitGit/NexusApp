import { NgFor, NgForOf, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { INewsContent } from '../../models/news-content.interface';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { IAppsContent } from '../../models/apps-content.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apps-carousal',
  imports: [NgFor, NgIf, DescriptionPipe, RouterModule],
  templateUrl: './apps-carousal.component.html',
  styleUrl: './apps-carousal.component.scss',
  standalone: true
})
export class AppsCarousalComponent implements OnInit, AfterViewInit{

  @Input() appsContents: IAppsContent[] = [];
  @Input() title!: string;
  // @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  selectedContent: string | null = null;
  
  constructor(){}
  ngAfterViewInit(): void {
    this.initSwiper();
  }
  
  ngOnInit(): void {
    
  }

  // getImagePath(fullUrl: string): string {
  //   // const baseUrl = 'https://news.google.com';
  //   // return fullUrl.replace(baseUrl, '');
  //   const index = fullUrl.indexOf('/api/attachments/');
  //   return fullUrl.substring(index);
  // }

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

}
