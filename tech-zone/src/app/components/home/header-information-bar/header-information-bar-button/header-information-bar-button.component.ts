import { Component, OnInit, Input } from '@angular/core';
import { IHeaderInformationBarButton } from '../../../../interfaces/information-bar/informationBarButtons';

@Component({
  selector: 'app-header-information-bar-button',
  templateUrl: './header-information-bar-button.component.html',
  styleUrls: ['./header-information-bar-button.component.css']
})
export class HeaderInformationBarButtonComponent implements OnInit {
  @Input() buttonInfo: IHeaderInformationBarButton;

  constructor() { }

  ngOnInit(): void {
  }

}
