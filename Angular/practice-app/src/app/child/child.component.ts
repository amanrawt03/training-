import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostingService } from '../posting.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  gift: any;
  @Input() fName!: string;
  @Output() dataEvent: EventEmitter<string> = new EventEmitter();
  sendFatherName() {
    this.dataEvent.emit('Rahul Gandhi');
  }

  constructor(private postingService: PostingService) {}
  ngOnInit(): void {
    this.postingService.getAGift().subscribe(data=>
        {const d = JSON.stringify(data)
        const dt = JSON.parse(d)
        this.gift = dt
        }
    );
  }
}
