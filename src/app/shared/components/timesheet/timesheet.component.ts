import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

interface TimesheetEntry {
  date: string;
  project: string;
  task: string;
  hours: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

interface Project {
  id: number;
  name: string;
}

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css'
})
export class TimesheetComponent {
  router = inject(Router);

  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  timesheetEntries: TimesheetEntry[] = [];
  projects: Project[] = [];
  timesheetForm: Partial<TimesheetEntry> = {};

  constructor() {
    this.projects = [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' },
      { id: 3, name: 'Project C' }
    ];

    this.timesheetEntries = [
      { date: '2023-10-01', project: 'Project A', task: 'Development', hours: 8, status: 'Approved' },
      { date: '2023-10-02', project: 'Project B', task: 'Review', hours: 6, status: 'Pending' },
      { date: '2023-10-03', project: 'Project A', task: 'Analyze', hours: 7, status: 'Rejected' }
    ];

    this.resetForm();
  }

  resetForm() {
    this.timesheetForm = {
      date: '',
      project: this.projects[0]?.name || '',
      task: '',
      hours: 0,
      status: 'Pending'
    };
  }

  addRow() {
    this.timesheetEntries.push({ ...this.timesheetForm as TimesheetEntry });
    this.resetForm();
  }

  removeRow(index: number): void {
    this.timesheetEntries.splice(index, 1);
  }

  getTotalHours(): number {
    return this.timesheetEntries.reduce((sum, entry) => sum + (Number(entry.hours) || 0), 0);
  }

  submitTimesheet(): void {
    alert('Timesheet submitted successfully!');
  }

  goToAppStore(): void {
    this.router.navigate(['/app-store']);
  }
}



// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-timesheet',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './timesheet.component.html',
//   styleUrl: './timesheet.component.css'
// })
// export class TimesheetComponent {

//     router = inject(Router);
    
//     timesheetEntries: any[] = [];
//     projects: any[] = [];
//     timesheetForm: any  = {};

//     constructor() {
//         this.timesheetEntries = [
//             { date: '2023-10-01', project: 'Project A', task: 'Development', hours: 8, status: 'Approved' },
//             { date: '2023-10-02', project: 'Project B', task: 'Review', hours: 6, status: 'Pending' },
//             { date: '2023-10-03', project: 'Project A', task: 'Analyze', hours: 7, status: 'Rejected' }
//         ];
//         this.projects = [
//             { id: 1, name: 'Project A' },
//             { id: 2, name: 'Project B' },
//             { id: 3, name: 'Project C' }
//         ];
//         this.timesheetForm = {
//           date: '',
//           project: '',
//           hours: '',
//           description: ''
//         };
//     }

//     addRow() {
//         this.timesheetEntries.push({
//             date: '',
//             project: this.projects[0].name,
//             task: '',
//             hours: 0,
//             status: 'Pending'
//         });
//     }

//     removeRow(index: number) {
//         this.timesheetEntries.splice(index, 1);
//     }

//     getTotalHours() {
//         return this.timesheetEntries.reduce((sum, entry) => sum + Number(entry.hours), 0);
//     }

//     submitTimesheet() {
//         // Implement your submit logic here
//         alert('Timesheet submitted!');
//     }
//     goToAppStore(): void {    
//         this.router.navigate(['app-store']);//this.router.navigate([`apps/${app}`]);
//         //window.history.back(); 
//     }
// }



// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-timesheet',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './timesheet.component.html',
//   styleUrl: './timesheet.component.css'
// })
// export class TimesheetComponent {

// timesheetEntries: any[];
// projects: any;
// timesheetForm: any;
//   constructor() {
//     this.timesheetEntries = [
//       { date: '2023-10-01', project: 'Project A', task: 'Development', hours: 8, status: 'Done' },
//       { date: '2023-10-02', project: 'Project B', task: 'Review', hours: 6, status: 'Pending' },
//       { date: '2023-10-03', project: 'Project A', task: 'Analyze', hours: 7, status: 'Done' }
//     ];
//     this.projects = [
//       { id: 1, name: 'Project A' },
//       { id: 2, name: 'Project B' },
//       { id: 3, name: 'Project C' }
//     ];
//     this.timesheetForm = {
//       date: '',
//       project: '',
//       hours: '',
//       description: ''
//     };
//   }

//   addRow() {
//     const table = document.getElementById('timesheetTable') as HTMLTableElement | null;
//     if (table) {
//       const newRow = table.insertRow(-1);
//       const cell1 = newRow.insertCell(0);
//       const cell2 = newRow.insertCell(1);
//       const cell3 = newRow.insertCell(2);
//       const cell4 = newRow.insertCell(3);
//       const cell5 = newRow.insertCell(4);

//       cell1.innerHTML = '<input type="text" placeholder="Date">';
//       cell2.innerHTML = '<input type="text" placeholder="Project">';
//       cell3.innerHTML = '<input type="text" placeholder="Hours">';
//       cell4.innerHTML = '<input type="text" placeholder="Description">';
//       cell5.innerHTML = '<button onclick="this.parentElement.parentElement.remove()">Delete</button>';
//     }
//   }

//   removeRow(rowNo: number) {
//     const table = document.getElementById('timesheetTable') as HTMLTableElement | null;
//     if (table) {
//       if (rowNo > 0 && rowNo < table.rows.length) {
//         table.deleteRow(rowNo);
//       } else {
//         console.error('Invalid row number');
//       }
//     } else {
//       console.error('Table not found');
//     }
//   }

//   getTotalHours() {
//     let totalHours = 0;
//     for (const entry of this.timesheetEntries) {
//       totalHours += entry.hours;
//     }
//     return totalHours;
//   }

//   submitTimesheet() {
//     const newEntry = {
//       date: this.timesheetForm.date,
//       project: this.timesheetForm.project,
//       hours: parseFloat(this.timesheetForm.hours),
//       description: this.timesheetForm.description
//     };

//     if (newEntry.date && newEntry.project && newEntry.hours && newEntry.description) {
//       this.timesheetEntries.push(newEntry);
//       this.timesheetForm = { date: '', project: '', hours: '', description: '' };
//     } else {
//       alert('Please fill in all fields');
//     }
//   }

// }
