import { Component, OnInit, Input } from '@angular/core';
import { HeaderInformationBarButton } from '../../interfaces/informationBarButtons';

@Component({
  selector: 'app-header-information-bar-button',
  templateUrl: './header-information-bar-button.component.html',
  styleUrls: ['./header-information-bar-button.component.css']
})
export class HeaderInformationBarButtonComponent implements OnInit {
  @Input() buttonInfo: HeaderInformationBarButton;

  constructor() { }

  ngOnInit(): void {
  }

}
