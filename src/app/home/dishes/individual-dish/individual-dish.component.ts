import { Component, Input } from '@angular/core';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-individual-dish',
  templateUrl: './individual-dish.component.html',
  styleUrl: './individual-dish.component.css',
})
export class IndividualDishComponent {
  @Input() dishItem: Dish;

}
