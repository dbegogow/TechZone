import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteProductComponent } from './favourite-product.component';

describe('FavouriteProductComponent', () => {
  let component: FavouriteProductComponent;
  let fixture: ComponentFixture<FavouriteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
