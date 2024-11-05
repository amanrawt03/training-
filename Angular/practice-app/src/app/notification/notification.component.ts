import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PostingService } from '../posting.service';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{
  constructor(private postingService:PostingService){}
  notification!: string
  ngOnInit(): void {
    this.postingService.notify$.subscribe(d=>{
      this.notification = d
    })
  }
}
