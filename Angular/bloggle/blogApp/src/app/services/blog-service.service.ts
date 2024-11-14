import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogResponse } from '../blog-response';
import { CommentResp } from '../comment-resp';
@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  constructor(private http: HttpClient) {}
  private getHeaders(){
    const token = localStorage.getItem('jwt')
    return new HttpHeaders({
      'Authorization':token ? `Bearer ${token}` : ' '
    })
  }
  // private url = 'http://localhost:5000'
  private url = 'https://9nl5otv9tf.execute-api.ap-south-1.amazonaws.com';
  getAllBlogs():Observable<BlogResponse> {
    return this.http.get<BlogResponse>(
      `${this.url}/blog`
    );
  }
  getMyBlogs(author: string|null):Observable<BlogResponse> {
    return this.http.get<BlogResponse>(`${this.url}/blog/author/{author}`);
  }
  readMyBlog(_id: string):Observable<BlogResponse> {
    return this.http.get<BlogResponse>(
      `${this.url}/blog/${_id}`
    );
  }
  addBlogApi(title: string, content: string, username: string):Observable<BlogResponse> {
    return this.http.post<BlogResponse>(`${this.url}/blog/setblog`, {
      title: title,
      content: content,
      username: username,
    }, {headers: this.getHeaders()});
  }

  delBlogApi(id: string):Observable<BlogResponse> {
    return this.http.delete<BlogResponse>(
      `${this.url}/blog/deleteblog/${id}`,{headers: this.getHeaders()})
  }

  updateBlogApi(id:string, newData:{title:string, content:string}):Observable<BlogResponse>{
    return this.http.put<BlogResponse>(`${this.url}/blog/updateblog`,{
      _id:id, newData
    },{headers: this.getHeaders()})
  }
  
  toggleBlogApprovalApi(id:string):Observable<BlogResponse>{
    return this.http.put<BlogResponse>(`${this.url}/admin/toggleApproval/${id}`, {})
  }

  // getCommentForBlog(id:string):Observable<CommentResp[]>{
  //   return this.http.get<CommentResp[]>(`${this.url}/comment/getCommentForBlog/${id}`)
  // }

}
