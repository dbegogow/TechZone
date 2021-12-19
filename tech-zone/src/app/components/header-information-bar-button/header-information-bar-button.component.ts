import { Component, OnInit, Input } from '@angular/core';
import { InformationBarButton } from '../../interfaces/informationBarButton';

@Component({
  selector: 'app-header-information-bar-button',
  templateUrl: './header-information-bar-button.component.html',
  styleUrls: ['./header-information-bar-button.component.css']
})
export class InformationBarButtonComponent implements OnInit {
  @Input() buttonInfo: InformationBarButton;

  constructor() { }

  ngOnInit(): void {
  }

}
