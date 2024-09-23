import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilityDataService } from '../../facility-data.service';
import { Facility } from '../../facility';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-facility-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './facility-details.component.html',
  styleUrls: ['./facility-details.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class FacilityDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  facilityDataService = inject(FacilityDataService);
  facility: Facility | undefined;
  bookingForm: FormGroup;
  endTime: string | null = null;
  isModalOpen: boolean = false;

  constructor(private fb: FormBuilder) {
    // Get facility ID from params and call service
    const facilityId = Number(this.route.snapshot.params['id']);
    this.facility = this.facilityDataService.getFacilityListById(facilityId);

    // Initialize booking form
    this.bookingForm = this.fb.group({
      bookDate: ['', Validators.required],
      bookTime: ['', Validators.required],
      hoursBooked: [
        '',
        [Validators.required, Validators.min(1), Validators.max(4)],
      ],
    });
  }

  ngOnInit() {
    this.bookingForm.valueChanges.subscribe(() => this.calculateEndTime());
  }

  calculateEndTime() {
    const bookDate = this.bookingForm.value.bookDate; // Get date part
    const bookTime = this.bookingForm.value.bookTime; // Get time part
    const hoursBooked = this.bookingForm.value.hoursBooked;

    if (bookDate && bookTime && hoursBooked) {
      const combinedDateTime = new Date(`${bookDate}T${bookTime}`); // Combine date and time
      const endTimeDate = new Date(
        combinedDateTime.getTime() + hoursBooked * 60 * 60 * 1000
      );

      this.endTime = endTimeDate.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else {
      this.endTime = null; // Reset if input is incomplete
    }
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
