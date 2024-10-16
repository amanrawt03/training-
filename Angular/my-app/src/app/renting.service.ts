import { Injectable } from '@angular/core';
import { RentCarsInterface } from './rent-cars-interface';
@Injectable({
  providedIn: 'root'
})
export class RentingService {
  url = "http://localhost:3000/rentalDB"

async getAllRentedCars(): Promise<RentCarsInterface[] | undefined>{
  let res = await fetch(this.url);
  return await res.json() ?? []
}

async getCarsByID(id:number): Promise<RentCarsInterface | undefined>{
  let res = await fetch(`${this.url}/${id}`);
  return await res.json() ?? {}
}

rentCar(buyerName:string, buyerContact: string, buyerLoc: string){
  console.log(`${buyerName}--${buyerContact}--${buyerLoc}`);
}
}



