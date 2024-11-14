import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BlogServiceService } from '../../services/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogResponse } from '../../blog-response';
import { CommentResp } from '../../comment-resp';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-read-blog',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './read-blog.component.html',
  styleUrl: './read-blog.component.css'
})
export class ReadBlogComponent implements OnInit{
  constructor(private blogService: BlogServiceService, private route:ActivatedRoute, private router:Router){}
  id:any = ""
  blog !: {id:string, title: string, content: string,username: string,__v: number,isApproved: boolean}
  comments:CommentResp[] = []
  commentForm!:FormGroup
 ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id')
   this.blogService.readMyBlog(this.id).subscribe((next)=>{
    let temp = JSON.stringify(next)
    let res = JSON.parse(temp)
    this.blog = res.data
   })
   
  //  this.blogService.getCommentForBlog(this.id).subscribe((next)=>{
  //   let temp = JSON.stringify(next)
  //   let res = JSON.parse(temp)
  //   this.comments = res.data
  //  })

   this.commentForm = new FormGroup({
    comment: new FormControl('', [Validators.required])
   })
 } 
 openCommentModal(){
  
}

 addComment(){

 }
 goBack(){
  this.router.navigate(['/myBlogs'])
 }

}
