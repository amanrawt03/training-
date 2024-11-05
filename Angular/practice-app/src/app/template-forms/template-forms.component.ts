import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css',
})
export class TemplateFormsComponent {
  permanentAddress: string = '';
  currentAddress: string = '';

  password: string = '';
  confirmPassword: string = '';

  onClick() {
    this.currentAddress = this.permanentAddress;
  }

  onSubmit(form: NgForm) {
    if (form.valid) console.log(form.value);
    else alert('Enter All fields.');
  }
}
