import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  @Input() iconStatus: boolean;
  isShowing: boolean = true;

  openDialog() {
    console.log('clicked');
    this.isShowing = !this.isShowing
  }
}
