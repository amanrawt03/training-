import { Component, inject} from '@angular/core';
import { RentCarsInterface } from '../rent-cars-interface';
import { CommonModule } from '@angular/common';
import { RentingService } from '../renting.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-prime-rentals',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './prime-rentals.component.html',
  styleUrl: './prime-rentals.component.css'
})
export class PrimeRentalsComponent {
  carList: RentCarsInterface[] = []
  rentingService: RentingService = inject(RentingService)
  constructor(){
    this.carList = this.rentingService.getAllRentedCars() ;
  }
}
