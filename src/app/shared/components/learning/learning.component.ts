import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  progress: number; // % complete
  status: 'Not Started' | 'In Progress' | 'Completed';
}

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent {
  router = inject(Router);
  
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Doe',
      duration: '3h 20m',
      progress: 100,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Microservices with .NET',
      instructor: 'Jane Smith',
      duration: '2h 45m',
      progress: 65,
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'DevOps with Azure',
      instructor: 'Michael Johnson',
      duration: '4h 15m',
      progress: 0,
      status: 'Not Started'
    }
  ];

  startCourse(course: Course): void {
    if (course.status === 'Not Started') {
      course.status = 'In Progress';
      course.progress = 5;
    }
  }

  markCompleted(course: Course): void {
    course.status = 'Completed';
    course.progress = 100;
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(/ /g, '');
  }

  goToAppStore(): void {
    this.router.navigate(['/app-store']);
  }
}

