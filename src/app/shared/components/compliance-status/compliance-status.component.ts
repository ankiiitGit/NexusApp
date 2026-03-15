import { AfterViewInit, Component, Input } from '@angular/core';
import { IAssociate, ICompliance } from '../../models/associate.interface';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-compliance-status',
  imports: [NgIf],
  templateUrl: './compliance-status.component.html',
  styleUrl: './compliance-status.component.scss'
})
export class ComplianceStatusComponent {
  @Input() complianceDetails: ICompliance | null = null;
  @Input() title!: string;
}
