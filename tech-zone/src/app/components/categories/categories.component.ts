import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() openedCategories: string;

  constructor() { }

  ngOnInit(): void {
  }

  openCategories(categoriesType: string) {
    this.openedCategories = categoriesType;
  }

  closeCategories() {
    this.openedCategories = '';
  }
}
