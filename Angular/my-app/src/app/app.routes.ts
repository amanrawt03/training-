import { Routes } from '@angular/router';
import { PrimeRentalsComponent } from './prime-rentals/prime-rentals.component';
import { DetailsComponent } from './details/details.component';
export const routes: Routes = [
    {
        path: '',
        component: PrimeRentalsComponent,
        title:'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title:'Car Details'
    }
];
