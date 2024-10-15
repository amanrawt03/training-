import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyFirstComponentComponent],
  template: `
  <section>
  <h1>{{title}}</h1>
  <h2>{{subHeading}}</h2>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  <div>
      <app-my-first-component></app-my-first-component>
    </div>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent{
  title = "Welcome to Home Component";
  subHeading = "Intro to Angular";

  // myInterval: any
  // cnt = 0
  
  // ngOnInit(){
  //   this.myInterval =setInterval(()=>{
  //     console.log(this.cnt++);
  //   },1000)
  // }
  // ngOnDestroy(){
  //   if(this.myInterval){
  //     clearInterval(this.myInterval) 
  //   }
  // }
}
