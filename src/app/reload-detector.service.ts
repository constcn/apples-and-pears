import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReloadDetectorService {
  private subject = new Subject<any>();

  sendMessage() {
      this.subject.next({});
  }

  onMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}



