import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() openedCategories: string;

  linksData = {
    tvFirst: [
      { name: 'TV', path: '/products' },
      { name: 'Soundbars', path: '/' },
      { name: 'Blu-Ray and DVD players', path: '/' },
      { name: 'Multimedia players', path: '/' },
      { name: 'Projectors and screens', path: '/' },
      { name: 'TV accessories', path: '/' },
      { name: 'Audio systems', path: '/' },
      { name: 'HI-FI components', path: '/' }
    ],
    tvSecond: [
      { name: 'Radio players', path: '/' },
      { name: 'Game Consoles', path: '/' },
      { name: 'Game console accessories', path: '/' },
      { name: 'Games', path: '/' },
      { name: 'PC Gaming', path: '/' },
      { name: 'PC Gaming accessories', path: '/' },
      { name: 'Musical instruments', path: '/' }
    ],
    phones: [
      { name: 'Mobile phones', path: '/' },
      { name: 'Tablets', path: '/' },
      { name: 'Smart watches', path: '/' },
      { name: 'Fitnes wrist', path: '/' },
      { name: 'True wireless headphones', path: '/' },
      { name: 'Headphones', path: '/' },
      { name: 'Accessories', path: '/' },
      { name: 'Bluetooth speakers', path: '/' },
      { name: 'Phones and PRMs', path: '/' }
    ],
    photos: [
      { name: 'DSLR cameras', path: '/' },
      { name: 'Mirrorless cameras', path: '/' },
      { name: 'Compacts cameras', path: '/' },
      { name: 'Instant digital cameras and consumables', path: '/' },
      { name: 'Lenses', path: '/' },
      { name: 'Flashes', path: '/' },
      { name: 'Camcoders', path: '/' },
      { name: 'Memory cards', path: '/' },
      { name: 'Photo printers and scanners', path: '/' },
      { name: 'Binoculars and telescopes', path: '/' },
      { name: 'Photo and video accessories', path: '/' }
    ],
    gps: [
      { name: 'GPS navigations', path: '/' },
      { name: 'GPS accessories', path: '/' },
      { name: 'Car receivers', path: '/' },
      { name: 'Car speakers', path: '/' },
      { name: 'Amplifiers', path: '/' },
      { name: 'FM transmitters', path: '/' },
      { name: 'Dashcam', path: '/' },
      { name: 'Auto bulbs', path: '/' }
    ],
    pcPeripheria: [
      { name: 'Laptops', path: '/' },
      { name: 'Desktops', path: '/' },
      { name: 'PC components', path: '/' },
      { name: 'Monitors', path: '/' },
      { name: 'Printers And Scaners', path: '/' },
      { name: 'Ebook readers and accessories', path: '/' },
      { name: 'PC Gaming', path: '/' },
      { name: 'PC Gaming accessories', path: '/' },
      { name: 'Game Consoles', path: '/' },
      { name: 'Game console accessories', path: '/' },
      { name: 'Games', path: '/' },
      { name: 'PC Software', path: '/' }
    ],
    itAccessoriesFirst: [
      { name: 'Wi-Fi Adaptors', path: '/' },
      { name: 'Mice And Keyboards', path: '/' },
      { name: 'Headphones And Microphones', path: '/' },
      { name: 'Web Cams', path: '/' },
      { name: 'PC Speakers', path: '/' },
      { name: 'HDD', path: '/' },
      { name: 'USB memory sticks', path: '/' },
      { name: 'Laptop bags', path: '/' },
      { name: 'Charging adaptors for laptops', path: '/' },
      { name: 'Office Furniture', path: '/' }
    ],
    itAccessoriesSecond: [
      { name: 'Joysticks And Wheels', path: '/' },
      { name: 'Cooling pads', path: '/' },
      { name: 'Optical Drives', path: '/' },
      { name: 'PC Cables', path: '/' },
      { name: 'PC Cleaning', path: '/' },
      { name: 'Surge protectors', path: '/' },
      { name: 'CD and DVD discs', path: '/' },
      { name: 'CMP Accessories', path: '/' },
      { name: 'PC Gaming accessories', path: '/' }
    ],
    sportsFirst: [
      { name: 'Acton cameras', path: '/' },
      { name: 'Accessories for action cameras', path: '/' },
      { name: 'Drones and accessories', path: '/' },
      { name: 'Robots', path: '/' },
      { name: 'Electric vehicles', path: '/' },
      { name: 'Bikes and bike accessories', path: '/' },
      { name: 'Cross Trainers', path: '/' },
      { name: 'Home Trainers', path: '/' },
      { name: 'Treadmill', path: '/' },
      { name: 'Fitness Wrists', path: '/' }
    ],
    sportsSecond: [
      { name: 'Binoculars and telescopes', path: '/' },
      { name: 'Torches', path: '/' },
      { name: 'MP3 and MP4 players', path: '/' },
      { name: 'Headphones and microphones', path: '/' },
      { name: 'Bluetooth speakers', path: '/' },
      { name: 'Radios', path: '/' },
      { name: 'Musical instruments', path: '/' },
      { name: 'Voice recorders', path: '/' },
      { name: 'Books', path: '/' },
      { name: 'Gift Cards', path: '/' }
    ],
    homeFirst: [
      { name: 'Smart home', path: '/' },
      { name: 'Electric bulbs', path: '/' },
      { name: 'Digital photo frames', path: '/' },
      { name: 'Radio clocks', path: '/' },
      { name: 'Radios', path: '/' },
      { name: 'Meteo Stations', path: '/' },
      { name: 'Distribution panels', path: '/' },
      { name: 'Torches', path: '/' },
      { name: 'Batteries & Chargers', path: '/' }
    ],
    homeSecond: [
      { name: 'Garden tools', path: '/' },
      { name: 'Drill machines', path: '/' },
      { name: 'Multi tools and accessories', path: '/' },
      { name: 'Grinders', path: '/' },
      { name: 'Electrical screwdrivers', path: '/' },
      { name: 'Saws, circular saws and planers', path: '/' },
      { name: 'Hand tools', path: '/' },
      { name: 'Screwdriverbits', path: '/' },
      { name: 'Saves, metal boxes and padlocks', path: '/' }
    ],
    domestics: [
      { name: 'Air treatment', path: '/' },
      { name: 'Vacuum Cleaners', path: '/' },
      { name: 'Coffee makers and automats', path: '/' },
      { name: 'Kitchen Appliances', path: '/' },
      { name: 'Microwave ovens', path: '/' },
      { name: 'Body Appliances', path: '/' },
      { name: 'Health care', path: '/' },
      { name: 'Baby Care', path: '/' },
      { name: 'Ironing', path: '/' },
      { name: 'Sewing Machines', path: '/' },
      { name: 'Water pressure cleaners and steam cleaners', path: '/' }
    ],
    air: [
      { name: 'Inverter', path: '/' },
      { name: 'Portable AC', path: '/' },
      { name: 'Fans', path: '/' },
      { name: 'Heaters', path: '/' }
    ],
    appliances: [
      { name: 'Washing machines', path: '/' },
      { name: 'Dryers', path: '/' },
      { name: 'Refrigerators', path: '/' },
      { name: 'Freezers', path: '/' },
      { name: 'Dishwashers', path: '/' },
      { name: 'Cookers', path: '/' },
      { name: 'Water Heaters', path: '/' },
      { name: 'Hoods', path: '/' },
      { name: 'Built-In Appliances', path: '/' },
      { name: 'Accessories', path: '/' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  openCategories(categoriesType: string) {
    this.openedCategories = categoriesType;
  }

  closeCategories() {
    this.openedCategories = '';
  }
}
