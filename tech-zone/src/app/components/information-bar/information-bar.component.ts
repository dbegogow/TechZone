import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html',
  styleUrls: ['./information-bar.component.css']
})
export class InformationBarComponent implements OnInit {
  data = [{
    title: 'Buy online and pick up from store',
    imgClass: 'fas fa-laptop-house',
    centerTitle: false
  },
  {
    title: 'Extended warranty insurance',
    imgClass: 'fas fa-sort-amount-up-alt',
    centerTitle: false
  },
  {
    title: 'Smart Care',
    imgClass: 'fas fa-caret-square-up',
    centerTitle: true
  },
  {
    title: 'Gift ideas',
    imgClass: 'fas fa-gifts',
    centerTitle: true
  },
  {
    title: 'Transport to the entrance of the building',
    imgClass: 'fas fa-truck',
    centerTitle: false
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

