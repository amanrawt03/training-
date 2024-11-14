import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { BlogServiceService } from '../../services/blog-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogInterface } from '../../blog-interface';
import { BlogResponse } from '../../blog-response';
import { BtnEnlargeDirective } from '../../cust-Directives/btn-enlarge.directive';
import { TitleCasePipe } from '../../cust-pipes/title-case.pipe';
import { TruncateTextPipe } from '../../cust-pipes/truncate-text.pipe';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink,BtnEnlargeDirective,TitleCasePipe,TruncateTextPipe],
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css'], 
})
export class MyBlogsComponent implements OnInit {
  username: any= '';
  allBlogs: BlogInterface[] = [];
  myBlogs: BlogInterface[] = [];
  filteredBlogs: BlogInterface[] = [];
  activ = 'myblogs';
  today:Date = new Date()
  isAdmin:string |null  = ''
  constructor(
    private snackBar: MatSnackBar,
    private blogService: BlogServiceService
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('user');
    this.isAdmin = localStorage.getItem('isAdmin');
    
    this.getMyBlogs();
  }

  getAllBlogs() {
    this.activ = 'allblogs';
    this.blogService.getAllBlogs().subscribe((next: BlogResponse) => {
      let blogData: BlogInterface[] = next.data;
      if(this.isAdmin === 'false')blogData = blogData.filter(blog=>blog.isApproved === true)
      const sortedBlogs: BlogInterface[] = blogData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      this.allBlogs = sortedBlogs;
      this.filteredBlogs = sortedBlogs;
    });
  }

  getMyBlogs() {
    this.activ = 'myblogs';
    this.blogService.getMyBlogs(this.username).subscribe({
      next: (next: BlogResponse) => {
        let blogData: BlogInterface[] = next.data;
        const sortedBlogs: BlogInterface[] = blogData.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        this.myBlogs = sortedBlogs;
        this.filteredBlogs = sortedBlogs;
      },
      error: (error) => {
        const mesg = error.error.message;
        if (mesg === 'No blogs yet') {
          console.log(mesg);
        }
      }
    });
  }
  

  deleteBlog(id: string) {
    this.blogService.delBlogApi(id).subscribe((response: BlogResponse) => {
      if (response.success) {
        this.snackBar.open('Blog deleted successfully!', "Close", {
          duration: 5000,
        });
        this.getMyBlogs();
      } else {
        this.snackBar.open('Something went wrong!', "Close", {
          duration: 5000,
        });
      }
    });
  }

  searchBlog(value: string) {
    this.filteredBlogs = !value
      ? (this.activ === 'myblogs'?this.myBlogs:this.allBlogs)
      : (this.activ === 'myblogs'?this.myBlogs: this.allBlogs).filter(blog =>
          blog.title.toLowerCase().includes(value.toLowerCase()) ||
          blog.content.toLowerCase().includes(value.toLowerCase())
        );
  }
  toggleApproval(id:string){
    this.blogService.toggleBlogApprovalApi(id).subscribe((next)=>{
      this.getAllBlogs()
    }, (error)=>{
      console.log(error);
      
    })
  }
}
