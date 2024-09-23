import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { Facility } from '../../facility';
import { FacilityDataService } from '../../facility-data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  facilityData: Facility[] = [];
  facilityDataService: FacilityDataService = inject(FacilityDataService);

  constructor(private router: Router) {
    this.facilityData = this.facilityDataService.getFacilityList();
  }
}
