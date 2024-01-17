export class topDishesService {
    topDishes: { imagePath: string, dishName: string }[] = [
    { imagePath: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png', dishName: 'Biryani' },
    { imagePath: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png', dishName: 'Pizza' },
    { imagePath: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png', dishName: 'Burger' },
    { imagePath: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png', dishName: 'Cake' },
    { imagePath: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png', dishName: 'Sandwich' },
    { imagePath: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png', dishName: 'Chicken' },
    { imagePath: 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png', dishName: 'Noodles' },
    { imagePath: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg', dishName: 'North Indian' },
    { imagePath: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png', dishName: 'Rolls' }
  ]

  getDishes(): { imagePath: string, dishName: string }[] {
    return this.topDishes
  }
}