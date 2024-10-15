import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {
  solve(a:number,b:number){
    return a+b
  }
}
