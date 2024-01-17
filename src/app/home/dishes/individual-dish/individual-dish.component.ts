import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-dish',
  templateUrl: './individual-dish.component.html',
  styleUrl: './individual-dish.component.css',
})
export class IndividualDishComponent {
  @Input() dishItem: { imagePath: string, dishName: string }
  
}
