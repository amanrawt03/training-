import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeRentalsComponent } from './prime-rentals/prime-rentals.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeRentalsComponent],
  template: `
    <div>
      <app-prime-rentals></app-prime-rentals>
    </div>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {

}