import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
[x: string]: any;
  isFilteredOnRating:boolean = false;
  applyRatingFilter() {
    this.isFilteredOnRating = !this.isFilteredOnRating;
  }
  openFilterDialog() {
    
  }
}
