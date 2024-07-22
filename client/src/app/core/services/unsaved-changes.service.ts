import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesService {

  private message: string = 'Ваша зміна буде втрачена. Ви впевнені, що хочете залишити сторінку?';

  constructor() {
    this.init();
  }

  private init() {
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
  }

  private handleBeforeUnload(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }
}
