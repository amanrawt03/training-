import { Component , inject} from '@angular/core';
import { RentingService } from '../renting.service';
import { RentCarsInterface } from '../rent-cars-interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  rentingService: RentingService = inject(RentingService)
  RentedCarId = -1
  carDetails:RentCarsInterface | undefined

  constructor(){
     this.RentedCarId = Number(this.route.snapshot.params['id'])
     this.carDetails = this.rentingService.getCarsByID(this.RentedCarId)
  }
}
