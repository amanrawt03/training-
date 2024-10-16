import { Component , inject} from '@angular/core';
import { RentingService } from '../renting.service';
import { RentCarsInterface } from '../rent-cars-interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet , ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  rentingService: RentingService = inject(RentingService)
  carDetails: RentCarsInterface | undefined


  rentedCar = new FormGroup({
    buyerName:new FormControl(''),
    buyerContact :new FormControl(''),
    noOfDays :new FormControl('')
  })

  constructor(private router:Router){
    const RentedCarId = parseInt(this.route.snapshot.params['id'])
    this.rentingService.getCarsByID(RentedCarId).then(carDetails=>{
      this.carDetails = carDetails;
    })
  }

  submitApplication(){
    if(this.rentedCar.valid)
    {this.rentingService.rentCar(
      this.rentedCar.value.buyerName ?? ' ',
      this.rentedCar.value.buyerContact?? '',
      this.rentedCar.value.noOfDays ?? '',
      this.carDetails?.modelName ?? '',
      this.carDetails?.ratePerDay ?? 0
    );
    this.router.navigate(['/receipt'])}
    else{
      alert('Please fill in all required fields');
    }
  }
  
}
