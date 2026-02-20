import { Routes } from '@angular/router';
import { AppStoreComponent } from './core/components/app-store/app-store.component';
// import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {path: '', loadComponent: ()=> import('./pages/login/login.component').then(a=> a.LoginComponent)},
    {path: 'home', loadComponent: ()=> import('./pages/home/home.component').then(a=> a.HomeComponent)},
    {path: 'app-store', loadComponent: ()=> import('./core/components/app-store/app-store.component').then(a=> a.AppStoreComponent) },
    {path: 'apps/timesheet', loadComponent: ()=> import('./shared/components/timesheet/timesheet.component').then(a=> a.TimesheetComponent) },
    {path: 'apps/mylearning', loadComponent: ()=> import('./shared/components/learning/learning.component').then(a=> a.LearningComponent) },
    // {
    // path: 'apps/timesheet',
    // loadComponent: () =>
    //     loadRemoteModule({
    //     remoteEntry: 'http://localhost:4300/remoteEntry.js',
    //     remoteName: 'timesheet-mf',
    //     exposedModule: './Component',
    //     }).then(m => m.TimesheetEntryComponent)
    // },
];
