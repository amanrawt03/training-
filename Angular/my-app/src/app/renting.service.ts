import { Injectable } from '@angular/core';
import { RentCarsInterface } from './rent-cars-interface';
@Injectable({
  providedIn: 'root'
})
export class RentingService {
  carList: RentCarsInterface[] = [
    {id:1,
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Bugati",
    year: 2003,
    price: 200000,
     color: "red",
    ownerName:"Vikas",
    ownerContact: 9099988827,
    condition: "V.Good"
  },{id:2,
    imgName: "https://images.unsplash.com/photo-1727873817701-8cd132afbb01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    modelName: "Ferrari",
    year: 2001,
    price: 20000000,
     color: "black",
    ownerName:"Ram",
    ownerContact: 9099988827,
    condition: "Poor"
  },{id:3,
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Lambo",
    year: 2023,
    price: 30000000,
     color: "red",
    ownerName: "Shivam",
    ownerContact: 9099988827,
    condition: "Good"
  },{id:4,
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Thar",
    year: 1990,
    price: 200000,
     color: "blue",
    ownerName:"Raju",
    ownerContact: 9099988827,
    condition: "Not bad"
  },{id:5,
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Gypsy",
    year: 1908,
    price: 200000,
     color: "red",
    ownerName:"Romil",
    ownerContact: 9099988827,
    condition: "Excellent"
  },{id:6,
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Swift",
    year: 2003,
    price: 200000,
     color: "red",
    ownerName:"Aman",
    ownerContact: 9099988827,
    condition: "Good"
  },{id:7,
    imgName: "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    modelName: "Covette",
    year: 2003,
    price: 200000,
     color: "black",
    ownerName:"Karan Johar",
    ownerContact: 9099988827,
    condition: "Poor"
  },{id:8,
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Bugati",
    year: 2003,
    price: 200000,
     color: "red",
    ownerName:"Khushal",
    ownerContact: 9099988827,
    condition: "Good"
  },{id:9,
    imgName: "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    modelName: "Red Bull",
    year: 2003,
    price: 200000,
     color: "blue",
    ownerName:"Karishma",
    ownerContact: 9099988827,
    condition: "Good"
  },
]

getAllRentedCars(): RentCarsInterface[]{
  return this.carList;
}

getCarsByID(id:number): RentCarsInterface | undefined{
  return this.carList.find(car=>car.id === id)
}

getAllCarsBefore2003():RentCarsInterface[]{
  return this.carList.filter((car)=>car.year<2003)
}

}
