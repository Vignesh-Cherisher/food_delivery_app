export class crossCommunicationService {
  selectedCityName: string = 'Chennai';

  getSelectedCity(): string {
    console.log(this.selectedCityName);
    return this.selectedCityName
  }

  setSelectedCity(selectedCity:string) {
    this.selectedCityName = selectedCity
  }
}