import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl , Validators, FormBuilder} from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightDirective } from '../../cust-Directives/highlight.directive';
@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule,HighlightDirective],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnInit{
  constructor(private snackBar:MatSnackBar,private fb:FormBuilder,private authService:AuthServiceService, private router:Router){}
  signupForm!:FormGroup
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      cnfPassword: ['', [Validators.required]],
    },{ validator: this.passwordMatchValidator })
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('cnfPassword')?.value
      ? null : { 'mismatch': true };
  }
  passwordValidator(control:FormControl){
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    return isValid ? null : { invalidPassword: true };
  }
  submitForm(){
    const data = this.signupForm.value
    if(this.signupForm.valid){
    this.authService.validateSignup(data.name, data.email, data.password).subscribe((res)=>{
      let temp = JSON.stringify(res)
      let data = JSON.parse(temp)
      console.log(data);
      
      if(data.message === "Not found"){
        this.snackBar.open("User already registered", "Close", {
          duration: 5000
        });
      }else{
        this.snackBar.open("Registered Successfully", "Close", {
          duration: 5000
        });
      }
    })}
    else{
      this.snackBar.open("Fill all required fields", "Close", {
        duration: 5000
      });
    }
  }

}
