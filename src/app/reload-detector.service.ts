import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReloadDetectorService {
  private subject = new Subject<any>();

  sendMessage(source?: object) {
      this.subject.next(source);
  }

  onMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}



