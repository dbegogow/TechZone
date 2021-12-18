import { Component, OnInit, Input } from '@angular/core';
import { InformationBarButton } from '../../interfaces/informationBarButton';

@Component({
  selector: 'app-information-bar-button',
  templateUrl: './information-bar-button.component.html',
  styleUrls: ['./information-bar-button.component.css']
})
export class InformationBarButtonComponent implements OnInit {
  @Input() buttonInfo: InformationBarButton;

  constructor() { }

  ngOnInit(): void {
  }

}
