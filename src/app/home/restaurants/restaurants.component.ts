import { Component,SimpleChanges } from '@angular/core';
import { crossCommunicationService } from '../../services/crossCommunication.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
  providers: [crossCommunicationService]
})
export class RestaurantsComponent {
  cityName: string = '';

  constructor(private crossCommunicationServ: crossCommunicationService) {
    this.cityName = crossCommunicationServ.getSelectedCity()
  }

  ngDoCheck(): void {
    console.log('run' + this.cityName);
    this.cityName = this.crossCommunicationServ.getSelectedCity()
  }
}
