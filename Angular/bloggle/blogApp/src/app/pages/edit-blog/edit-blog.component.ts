import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../../services/blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditorModule } from '@tinymce/tinymce-angular';
@Component({
  selector: 'app-edit-blog',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule,EditorModule],
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
})
export class EditBlogComponent implements OnInit {
  editBlogForm!: FormGroup; // Declare the form group
  id: any = ''; // Declare id
  blog!: { title: string; content: string };

  constructor(
    private snackBar: MatSnackBar,
    private blogService: BlogServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with empty controls
    this.initializeForm();
    // Get the blog ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    
    // Fetch the blog data
    if (this.id) {
      this.blogService.readMyBlog(this.id).subscribe((next) => {
        let temp = JSON.stringify(next);
      let res = JSON.parse(temp);
      this.blog = res.data;
        // Update form values with fetched blog data
        this.editBlogForm.patchValue({
          title: this.blog.title,
          content: this.blog.content,
        });
      });
    }
  }

  initializeForm() {
    this.editBlogForm = this.fb.group({
      title: new FormControl('', Validators.required), // Initialize with empty string
      content: new FormControl('', Validators.required), // Initialize with empty string
    });
  }

  editBlog() {
    this.blogService.updateBlogApi(this.id, this.editBlogForm.value).subscribe(
      (next) => {
        this.snackBar.open("Blog updated successfully!", "Close", {
          duration: 5000,
        });
        this.router.navigate(['myBlogs']);
      },
      (error) => {
        this.snackBar.open('Error updating blog', "Close", {
          duration: 5000,
        });
      }
    );
  }

  goBack() {
    this.router.navigate(['myBlogs']);
  }
}
