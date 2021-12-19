import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-information-bar',
  templateUrl: './footer-information-bar.component.html',
  styleUrls: ['./footer-information-bar.component.css']
})
export class FooterInformationBarComponent implements OnInit {
  buttonsData = [{
    title: 'Order by phone or Viber, get at home',
    imgClass: 'fas fa-phone-alt',
  },
  {
    title: 'Working time',
    imgClass: 'far fa-clock',
  },
  {
    title: 'Gift ideas',
    imgClass: 'fas fa-gifts',
  },
  {
    title: 'Buy online and pick up from store',
    imgClass: 'fas fa-laptop-house',
  },
  {
    title: 'Transport to the entrance of the building',
    imgClass: 'fas fa-truck',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
