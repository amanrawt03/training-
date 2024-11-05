import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { BlogInterface } from '../blog-interface';
import { BlogResponse } from '../blog-response';
@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  constructor(private http: HttpClient) {}
  getAllBlogs():Observable<BlogResponse> {
    return this.http.post<BlogResponse>(
      'https://blogbackend-beta.vercel.app/blog/getallblog',
      {}
    );
  }
  getMyBlogs(username: string):Observable<BlogResponse> {
    return this.http.post<BlogResponse>('https://blogbackend-beta.vercel.app/blog/getblog', {
      username: username,
    });
  }
  readMyBlog(id: string):Observable<BlogResponse> {
    return this.http.get<BlogResponse>(
      `https://blogbackend-beta.vercel.app/blog/getblog/${id}`
    );
  }
  addBlogApi(title: string, content: string, username: string):Observable<BlogResponse> {
    return this.http.post<BlogResponse>('https://blogbackend-beta.vercel.app/blog/setblog', {
      title: title,
      content: content,
      username: username,
    });
  }

  delBlogApi(id: string):Observable<BlogResponse> {
    return this.http.delete<BlogResponse>(
      'https://blogbackend-beta.vercel.app/blog/deleteblog',
      {
        body: { _id: id },
      }
    );
  }

  updateBlogApi(id:string, updatedData:{title:string, content:string}):Observable<BlogResponse>{
    return this.http.put<BlogResponse>('https://blogbackend-beta.vercel.app/blog/updateblog',{
      _id:id, ...updatedData
    })
  }
}
