import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { HomeService } from '../../shared/services/home.service';
import { NewsCarousalComponent } from '../../shared/components/news-carousal/news-carousal.component';
import { INewsContent } from '../../shared/models/news-content.interface';
import { AppsCarousalComponent } from "../../shared/components/apps-carousal/apps-carousal.component";
import { IAppsContent } from '../../shared/models/apps-content.interface';
import { AssociateDetailsComponent } from "../../shared/components/associate-details/associate-details.component";
import { HolidayLeaveCardComponent } from "../../shared/components/holiday-leave-card/holiday-leave-card.component";
import { ComplianceStatusComponent } from "../../shared/components/compliance-status/compliance-status.component";
import { IAssociate, ICompliance } from '../../shared/models/associate.interface';
import { IHoliday } from '../../shared/models/holiday.interface';
import { ILeave } from '../../shared/models/leave.interface';
import { FooterComponent } from "../../core/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, NewsCarousalComponent, AppsCarousalComponent, AssociateDetailsComponent, HolidayLeaveCardComponent, ComplianceStatusComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  auth = inject(AuthService);
  homeService = inject(HomeService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  popularNews: INewsContent[] = [];
  trendingApps: IAppsContent[] = [];
  associateDetails: IAssociate[] = [];
  complianceDetails: ICompliance | null = null;
  holidayDetails: IHoliday[] = [];
  leaveDetails: ILeave[] = [];
  
  ngOnInit(): void {

    // Fetching the popular news data from the service
    this.homeService.getNews()
    .subscribe(resp => {
      console.log(resp);
      this.popularNews = resp.data;
      console.log(this.popularNews);
    })

    // Fetching the apps data from the service
    this.homeService.getApps()
    .subscribe(resp => {
      console.log(resp);
      this.trendingApps = resp.result;
      console.log(this.trendingApps);
    });

    // Fetching the associate details data from the service
    this.homeService.getAssociateDetails()
    .subscribe(resp => {
      console.log(resp);
      this.associateDetails = resp.result;
      this.complianceDetails = {
        associateId: resp.result[0].associateId,
        timesheetCompliance: resp.result[0].timesheetCompliance,
        laptopCompliance: resp.result[0].laptopCompliance,
        trainingCompliance: resp.result[0].trainingCompliance
      };
      console.log(this.associateDetails);
    });

    // Fetching the holiday details data from the service
    this.homeService.getHolidays()
    .subscribe(resp => {
      console.log(resp);
      this.holidayDetails = resp.result;
      console.log(this.holidayDetails);
    });

    // Fetching the leave details data from the service
    this.homeService.getLeaves()
    .subscribe(resp => {
      console.log(resp);
      this.leaveDetails = resp.result;
      console.log(this.leaveDetails);
    });

  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
