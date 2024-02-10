import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private currentViewSubject = new BehaviorSubject<string>('private-dates');
  public currentView$: Observable<string> =
    this.currentViewSubject.asObservable();

  updateView(newView: string): void {
    this.currentViewSubject.next(newView);
  }
}
