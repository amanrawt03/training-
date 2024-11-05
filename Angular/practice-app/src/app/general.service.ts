import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  userSubject = new BehaviorSubject<string>('Aman')
  user$ = this.userSubject.asObservable()
  setUser(name:string){
    this.userSubject.next(name);
  }

}