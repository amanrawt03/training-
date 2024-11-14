import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private authService: AuthServiceService, private router:Router){}
  username:any = ""
  isAdmin:string|null = ""
ngOnInit(): void {
  this.username = localStorage.getItem('user')
  this.isAdmin = localStorage.getItem('isAdmin')
}
logout(){
  this.authService.logout()
  this.router.navigate(['/login'])
}
}
