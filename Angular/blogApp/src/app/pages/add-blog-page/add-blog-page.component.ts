import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditorModule } from '@tinymce/tinymce-angular';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { BlogServiceService } from '../../services/blog-service.service';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-add-blog-page',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, RouterLink, CommonModule,EditorModule],
  templateUrl: './add-blog-page.component.html',
  styleUrl: './add-blog-page.component.css',
})
export class AddBlogPageComponent implements OnInit {
  constructor(
    private snackBar:MatSnackBar,
    private blogService: BlogServiceService,
    private authService: AuthServiceService,
    private router: Router
  ) {}
  blogForm!: FormGroup;
  username: any = '';
  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
    this.username = localStorage.getItem('user')
  }

  addBlog() {
    const data = this.blogForm.value;
    this.blogService
      .addBlogApi(data.title, data.content, this.username)
      .subscribe((next) => {
        console.log(next);
        let temp = JSON.stringify(next);
        let res = JSON.parse(temp);
        if (res.success) {
          this.snackBar.open('Blog Added Successfully', "Close", {
            duration: 5000
          });
          this.router.navigate(['/myBlogs']);
        } else {
          this.snackBar.open('Could not add', "Close", {
            duration: 5000
          });
        }
      });
  }
}
