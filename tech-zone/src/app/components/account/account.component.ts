import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSection(e: any) {
    const target = e.target;

    if (target.localName !== 'a') {
      return;
    }

    this.clearOpenSection(target);

    target.classList.add("opened")
  }

  clearOpenSection(target: HTMLElement) {
    const sectionBtns = target.parentElement;
    const btns: HTMLElement[] = [].slice.call(sectionBtns?.children);

    btns.forEach((btn) => btn.classList.remove('opened'));
  }
}
