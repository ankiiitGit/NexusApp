import { Component, Input } from '@angular/core';
import { IAssociate } from '../../models/associate.interface';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-associate-details',
  imports: [NgFor],
  templateUrl: './associate-details.component.html',
  styleUrl: './associate-details.component.scss'
})
export class AssociateDetailsComponent {

  @Input() associateDetails: IAssociate[] = [];
  @Input() title!: string;
}
