import { Injectable } from '@angular/core';
import { RentCarsInterface } from './rent-cars-interface';
import { FormData } from './form-data';
@Injectable({
  providedIn: 'root'
})

export class RentingService {
  // url = "http://localhost:3000/rentalDB"
  url = "https://demo1637658.mockable.io/rentalDB"
  formData: FormData = {
    buyerName: "",
    buyerContact: 0,
    noOfDays: 0,
    modelName: "",
    ratePerDay: 0
  }
async getAllRentedCars(): Promise<RentCarsInterface[] | undefined>{
  let res = await fetch(this.url);
  return await res.json() ?? []
}

async getCarsByID(id:number): Promise<RentCarsInterface | undefined>{
  let res = await fetch(`${this.url}/${id}`);
  return await res.json() ?? {}
}

rentCar(buyerName:string, buyerContact: string, noOfDays: string, modelName: string, ratePerDay: number){
  console.log(`${buyerName}--${buyerContact}--${noOfDays}--${modelName}`);
  this.formData = {
    buyerName, buyerContact: parseInt(buyerContact), noOfDays: parseInt(noOfDays), modelName, ratePerDay
  }
}

getFormData(){
  return this.formData
}
}



