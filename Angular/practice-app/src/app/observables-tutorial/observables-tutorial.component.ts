import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, debounceTime, from, fromEvent, interval, Observable, of, ReplaySubject } from 'rxjs';
import { PostBookComponent } from '../post-book/post-book.component';
import { NotificationComponent } from '../notification/notification.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  NgModel
} from '@angular/forms';
import { Subject } from 'rxjs';
import { take } from 'rxjs';
import { PostingService } from '../posting.service';
@Component({
  selector: 'app-observables-tutorial',
  standalone: true,
  imports: [PostBookComponent, FormsModule, ReactiveFormsModule, NotificationComponent],
  templateUrl: './observables-tutorial.component.html',
  styleUrls: ['./observables-tutorial.component.css'],
})
export class ObservablesTutorialComponent implements OnInit {
  @ViewChild('myBtn') myBtn!: ElementRef;
  constructor(private postingService: PostingService){}
  username$!: Observable<string>;
  name!: string;

  currentData !:string
  onSubmit(){
    console.log(this.currentData); 
    this.postingService.getNotified(this.currentData)
  }

  // of operator
  carList = ['bmw', 'nano', 'santro'];
  carArray$: Observable<string[]> = of(this.carList);

  // from operator
  nums = [1, 2, 3, 4, 55];
  numArr$: Observable<number> = from(this.nums);
  soldCarsArr$: Observable<string> = from(this.carList);

  // fromEvent()
  onClick() {
    const eventObservable$ = fromEvent(this.myBtn.nativeElement, 'click');
    eventObservable$.subscribe((data) => {
      console.log(data);
    });
  }

  // interval operator
  intervalObservable$ = interval(20000);

  kuchBhi = 'kuch bhi derha hu';

  handleDataChange(event: string) {
    console.log(event);
  }

  //debounceTime
  myForm!: FormGroup;
  onChange() {}

  // Subject vs Observable:
  carObservable$ = new Observable(observer=>{
    observer.next(Math.random())
  })

  carSubject = new Subject()
  carBehaveSubject = new BehaviorSubject("Hero honda")
  carReplaySubject = new ReplaySubject(1)
  carAsyncSubject = new AsyncSubject()

  ngOnInit(): void {
    // Both subscribers to observables will get individual exec
    // this.carObservable$.subscribe(data=>{console.log(data);
    // })
    // this.carObservable$.subscribe(data=>{console.log(data);
    // })

    // // jab tk next nhi kruga , tb tk kuch value assign nhi hoga, hone ke baad sabko assign hoga 
    // this.carSubject.subscribe(data=>console.log(data))
    // this.carSubject.next("hello")
    // this.carSubject.subscribe(data=>console.log(data))
    // this.carSubject.next(Math.random())

    // // behaviour subject
    // this.carBehaveSubject.subscribe(data=>console.log(data))
    // this.carBehaveSubject.next("Pulsar")
    // this.carBehaveSubject.subscribe(data=>console.log(data))

    // // replay subject
    // this.carReplaySubject.next("Bmw is my fav")
    // this.carReplaySubject.next("Audi is love")
    // this.carReplaySubject.subscribe(data=>console.log(data))
    // this.carReplaySubject.next("Santro is life")
    // this.carReplaySubject.subscribe(data=>console.log(data))

    // async subject 
    // this.myForm = new FormGroup({ name: new FormControl('Start here') });
    // this.myForm
    //   .get('name')
    //   ?.valueChanges.pipe(take(4), debounceTime(3000))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // Subscribe to interval observable
    // this.intervalObservable$.subscribe(num => {
    //   console.log(num);
    // });
    // this.username$ = new Observable(observer => {
    //   observer.next('Ram');
    //   observer.next('Shyam');
    //   observer.next('Mohit');
    //   observer.complete();
    // });
    // this.username$.subscribe(name => {
    //   this.name = name;
    // });

    // this.carArray$.subscribe(car => {
    //   console.log(car);
    // });

    // this.numArr$.subscribe(num => {
    //   console.log(num);
    // });
  }
}
