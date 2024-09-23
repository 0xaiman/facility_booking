import { Component } from '@angular/core';
import { HomeBookingFormComponent } from '../../components/home-booking-form/home-booking-form.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBookingFormComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
