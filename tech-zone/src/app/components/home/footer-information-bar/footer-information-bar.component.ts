import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-information-bar',
  templateUrl: './footer-information-bar.component.html',
  styleUrls: ['./footer-information-bar.component.css']
})
export class FooterInformationBarComponent implements OnInit {
  buttonsData = [{
    title: 'Order by phone or Viber, get at home',
    path: '/',
    imgClass: 'fas fa-phone-alt'
  },
  {
    title: 'Working time',
    path: '/',
    imgClass: 'far fa-clock'
  },
  {
    title: 'Gift ideas',
    path: '/gift-ideas',
    imgClass: 'fas fa-gifts'
  },
  {
    title: 'Buy online and pick up from store',
    path: '/pickup-from-store',
    imgClass: 'fas fa-laptop-house'
  },
  {
    title: 'Transport to the entrance of the building',
    path: '/transport',
    imgClass: 'fas fa-truck'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
