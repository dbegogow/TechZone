import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-information-bar',
  templateUrl: './header-information-bar.component.html',
  styleUrls: ['./header-information-bar.component.css']
})
export class HeaderInformationBarComponent implements OnInit {
  buttonsData = [{
    title: 'Buy online and pick up from store',
    path: '/pickup-from-store',
    imgClass: 'fas fa-laptop-house',
    centerTitle: false
  },
  {
    title: 'Extended warranty insurance',
    path: '/extended-warranty',
    imgClass: 'fas fa-sort-amount-up-alt',
    centerTitle: false
  },
  {
    title: 'Smart Care',
    path: '/',
    imgClass: 'fas fa-caret-square-up',
    centerTitle: true
  },
  {
    title: 'Gift ideas',
    path: '/',
    imgClass: 'fas fa-gifts',
    centerTitle: true
  },
  {
    title: 'Transport to the entrance of the building',
    path: '/',
    imgClass: 'fas fa-truck',
    centerTitle: false
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

