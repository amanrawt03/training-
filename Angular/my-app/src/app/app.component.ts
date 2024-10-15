import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <div class="left">
      <app-home></app-home>
    </div>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  org="ko";
}
