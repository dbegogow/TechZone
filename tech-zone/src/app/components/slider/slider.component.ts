import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() activeImg: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.repeat();
  }

  repeat() {
    setInterval(() => {
      if (this.activeImg === 4) {
        this.activeImg = 0
        return;
      }

      this.activeImg++;
    }, 5000)
  }
}
