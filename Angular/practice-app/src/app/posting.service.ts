import { Injectable } from '@angular/core';
import { PostInterface } from './post-interface';
import { ProductInterface } from './product-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError , map} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostingService {
  constructor(private http: HttpClient) {}
  postsUrl = 'https://dummyjson.com/posts';
  productsUrl = 'https://dummyjson.com/products';

  getAGift(){
    return this.http.get('https://dummyjson.com/products/1')
  }

  async getAllPosts(): Promise<PostInterface[]> {
    const res = await fetch(this.postsUrl);
    const data = await res.json();
    return data.posts;
  }
  
  // OLDER VERSION:
  // getAllProducts(): Observable<ProductInterface[]> {
  //   return new Observable((observer) => {
  //     fetch(this.productsUrl)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         observer.next(data.products);
  //         observer.complete();
  //       })
  //       .catch((err) => {
  //         observer.error(err); 
  //       });
  //   });
  // }

  // FOR NEWER VERSION:
  getAllProducts(): Observable<ProductInterface[]>{
    return this.http.get<{products: ProductInterface[]}>(this.productsUrl).pipe(
      map(response => response.products),
      catchError(error => {
        console.error('Error fetching posts:', error);
        throw error; 
      })
    );
  }
  notify$ = new BehaviorSubject("Greeting Everyone")
  
  getNotified(data:string){
    this.notify$.next(data)
  }


} 