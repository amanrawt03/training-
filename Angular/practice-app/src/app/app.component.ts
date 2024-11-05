import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormsComponent } from "./template-forms/template-forms.component";
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PostBookComponent } from './post-book/post-book.component';
import { ParentComponent } from './parent/parent.component';
import { ObservablesTutorialComponent } from './observables-tutorial/observables-tutorial.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ObservablesTutorialComponent, RouterOutlet, TemplateFormsComponent,ReactiveFormsComponent, PostBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
