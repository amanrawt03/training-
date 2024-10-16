import { Component, inject } from '@angular/core';
import { RentingService } from '../renting.service';
import { FormData } from '../form-data';
@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent {
  data: FormData;
  date = new Date()

  rentingService: RentingService = inject(RentingService)
  constructor(){
    this.data = this.rentingService.getFormData()
    console.log(this.data.noOfDays)
  }
}
