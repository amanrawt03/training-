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
  username: any = '';
  allBlogs: BlogInterface[] = [];
  filteredBlogs: BlogInterface[] = [];
  activ = 'myblogs';
  today:Date = new Date()
  constructor(
    private snackBar: MatSnackBar,
    private blogService: BlogServiceService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('user');
    this.getMyBlogs(); // Call to fetch user's blogs on initialization
  }

  getAllBlogs() {
    this.activ = 'allblogs';
    this.blogService.getAllBlogs().subscribe((next: BlogResponse) => {
      let blogData: BlogInterface[] = next.data;
      const sortedBlogs: BlogInterface[] = blogData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      this.allBlogs = sortedBlogs;
      this.filteredBlogs = sortedBlogs;
    });
  }

  getMyBlogs() {
    this.activ = 'myblogs';
    this.blogService
      .getMyBlogs(this.username)
      .subscribe((next: BlogResponse) => {
        let blogData: BlogInterface[] = next.data;
        const sortedBlogs: BlogInterface[] = blogData.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        this.allBlogs = sortedBlogs;
        this.filteredBlogs = sortedBlogs;
      });
  }

  deleteBlog(id: string) {
    this.blogService.delBlogApi(id).subscribe((response: BlogResponse) => {
      if (response.success) {
        this.snackBar.open('Blog deleted successfully!', "Close", {
          duration: 5000,
        });
        this.getMyBlogs(); // Refresh the list after deletion
      } else {
        alert('Something went wrong');
      }
    });
  }

  searchBlog(value: string) {
    this.filteredBlogs = !value
      ? this.allBlogs
      : this.allBlogs.filter(blog =>
          blog.title.toLowerCase().includes(value.toLowerCase()) ||
          blog.content.toLowerCase().includes(value.toLowerCase())
        );
  }
}
