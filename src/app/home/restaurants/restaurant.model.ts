export class Restaurant {
  public Name: string;
  public logoImagePath:string
  public rating: number;
  public cityName: string;
  public address: string;
  public imagePaths: string[];

  constructor(name: string, logoImage:string, rating?: number, CityName?: string, address?: string, imagePaths?: string[]) {
    this.Name = name;
    this.logoImagePath = logoImage;
    this.rating = rating || 0;
    this.cityName = '';
    this.address = address || '';
    this.imagePaths = imagePaths || [];
  }
}