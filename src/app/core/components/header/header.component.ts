import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = '';
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  auth = inject(AuthService);
  navList = [
    { name: "Home", route: "/home" },
    { name: "My Actions", route: "/my-actions" },
    { name: "App Store", route: "/app-store" },
    { name: "Activity Store", route: "/activity-store" },
    { name: "My Daily Corner", route: "/my-daily-corner" }
  ];
}