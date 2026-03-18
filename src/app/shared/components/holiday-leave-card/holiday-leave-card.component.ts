import { Component, Input } from '@angular/core';
import { IHoliday } from '../../models/holiday.interface';
import { ILeave } from '../../models/leave.interface';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holiday-leave-card',
  imports: [NgFor, CommonModule],
  templateUrl: './holiday-leave-card.component.html',
  styleUrl: './holiday-leave-card.component.scss'
})
export class HolidayLeaveCardComponent {

  @Input() holidayDetails: IHoliday[] = [];
    @Input() leaveDetails: ILeave[] = [];
}
