import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(type: string, article: string, text: string) {
    this.toasts.push({ type, article, text });
    setTimeout(() => this.toasts.shift(), 995000);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}

// type - success, error, warning, info
