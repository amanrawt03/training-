import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightDirective } from '../../cust-Directives/highlight.directive';
@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, HighlightDirective],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {}
  signupForm!: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), this.passwordValidator],
      ],
      cnfPassword: ['', [Validators.required]],
    });
  }
  passwordValidator(control: FormControl) {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    return isValid ? null : { invalidPassword: true };
  }
  submitForm() {
    const d = this.signupForm.value;
    if (this.signupForm.valid) {
      if (d.password !== d.cnfPassword) {
        this.snackBar.open("Passwords Don't match", 'Close', {
          duration: 5000,
        });
      } else {
        
        this.authService
          .validateSignup(
            d.username,
            d.email,
            d.password,
            d.cnfPassword
          )
          .subscribe((res) => {
            let temp = JSON.stringify(res);
            let data = JSON.parse(temp);
            
            if (data.message === 'Could not create account') {
              this.snackBar.open('Could not create account', 'Close', {
                duration: 5000,
              });
            } else if (data.message === 'User already exists') {
              this.snackBar.open('User already registered', 'Close', {
                duration: 5000,
              });
            } else {
              this.snackBar.open('Registered Successfully', 'Close', {
                duration: 5000,
              });
              this.router.navigate(['/some-success-page']); // Redirect after successful registration
            }
          },
          (error) => {
            console.error('Error during signup:', error.error.message);
            this.snackBar.open(error.error.message, 'Close', { duration: 5000 });
          }
        )
      }
    } else {
      console.log('Form validation failed:', this.signupForm.errors);
      this.snackBar.open('Fill all required fields', 'Close', {
        duration: 5000,
      });
    }
  }
}
