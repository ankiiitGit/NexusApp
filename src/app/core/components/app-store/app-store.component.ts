import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { IAppsContent } from '../../../shared/models/apps-content.interface';
import { DescriptionPipe } from '../../../shared/pipes/description.pipe';
import { HomeService } from '../../../shared/services/home.service';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-app-store',
  imports: [HeaderComponent, NgFor, DescriptionPipe, NgIf, CommonModule, FooterComponent],
  templateUrl: './app-store.component.html',
  styleUrl: './app-store.component.scss'
})

export class AppStoreComponent implements OnInit {
  homeService = inject(HomeService);
  router = inject(Router);

  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;

  apps: IAppsContent[] = [];

  ngOnInit(): void {

    // Fetching the apps data from the service
    this.homeService.getAllApps()
    .subscribe(resp => {
      console.log(resp);
      this.apps = resp.result;
      console.log(this.apps);
    });
  }

  launchApp(app : string){
    this.router.navigate([`apps/${app}`]);
  }    
}
