import { Component} from '@angular/core';
import { RentCarsInterface } from '../rent-cars-interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prime-rentals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prime-rentals.component.html',
  styleUrl: './prime-rentals.component.css'
})
export class PrimeRentalsComponent {
  carList: RentCarsInterface[] = [
    {
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Bugati",
    year: 2003,
    price: 200000
  },{
    imgName: "https://images.unsplash.com/photo-1727873817701-8cd132afbb01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    modelName: "Ferrari",
    year: 2001,
    price: 20000000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Lambo",
    year: 2023,
    price: 30000000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Thar",
    year: 1990,
    price: 200000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Gypsy",
    year: 1908,
    price: 200000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Swift",
    year: 2003,
    price: 200000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    modelName: "Covette",
    year: 2003,
    price: 200000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    modelName: "Bugati",
    year: 2003,
    price: 200000
  },{
    imgName: "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    modelName: "Red Bull",
    year: 2003,
    price: 200000
  },
]
  
}
