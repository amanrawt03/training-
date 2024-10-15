import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeRentalsComponent } from './prime-rentals/prime-rentals.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeRentalsComponent,RouterModule],
  template: `
    <div>
       <router-outlet></router-outlet>
    </div>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {

}