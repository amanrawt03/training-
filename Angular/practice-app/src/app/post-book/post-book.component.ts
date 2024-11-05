import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { PostingService } from '../posting.service';
import { PostInterface } from '../post-interface';
import { CommonModule } from '@angular/common';
import { ProductInterface } from '../product-interface';
import { Output } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-post-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-book.component.html',
  styleUrl: './post-book.component.css',
})
export class PostBookComponent implements OnInit {
  @Input() data!:string
  @Output() dataChange = new EventEmitter<string>()

  byeFunc(){
    this.dataChange.emit("hello me child hoo")
  }

  myPosts: PostInterface[] = [];
  myProducts: ProductInterface[] = [];
  constructor(
    private postingService: PostingService
  ) {}
  ngOnInit() {
    this.postingService.getAllPosts().then((allPosts) => (this.myPosts = allPosts));
    this.postingService.getAllProducts().subscribe({
      next: (products) => {
        this.myProducts = products;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
