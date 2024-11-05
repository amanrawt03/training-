import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightDirective } from '../../cust-Directives/highlight.directive';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule,HighlightDirective],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  constructor(private snackBar:MatSnackBar,private fb:FormBuilder,private authService:AuthServiceService,private router:Router){}
  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator
      ]]
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
    let data = this.loginForm.value;
    if(this.loginForm.valid){
    this.authService.validateLogin(data.email, data.password).subscribe(response => {
        let res = JSON.stringify(response)
        let resp = JSON.parse(res)
        console.log(resp);
        
        if (resp.message === "Valid") {
            this.router.navigate(['/myBlogs']);
        } else {
            this.snackBar.open(resp.message, "Close", {
              duration: 5000
            });
        }
    });}
    else{
      this.snackBar.open("Fill all required fields", "Close", {
        duration: 5000
      });
    }
}

}
