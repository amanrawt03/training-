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
        Validators.minLength(8)
      ]]
    });
  }

  submitForm() {
    let data = this.loginForm.value;
    this.authService.validateLogin(data.email, data.password).subscribe(response => {
        let res = JSON.stringify(response)
        let resp = JSON.parse(res)
        
        if (resp.data) {
            this.router.navigate(['/myBlogs']);
        }
    }, (error)=>{
      console.log(error);
      this.snackBar.open(error.error.message, "Close", {
        duration: 5000
      });
    });
}

}
