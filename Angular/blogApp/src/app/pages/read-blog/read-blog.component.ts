import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BlogServiceService } from '../../services/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-blog',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './read-blog.component.html',
  styleUrl: './read-blog.component.css'
})
export class ReadBlogComponent implements OnInit{
  constructor(private blogService: BlogServiceService, private route:ActivatedRoute, private router:Router){}
  id:any = ""
  blog: { title: string; content: string } = {title: "title" , content: "content"}
 ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id')
   this.blogService.readMyBlog(this.id).subscribe(next=>{
    let temp = JSON.stringify(next)
    let res = JSON.parse(temp)
    this.blog = res.data
   })
 } 
 goBack(){
  this.router.navigate(['/myBlogs'])
 }

}
