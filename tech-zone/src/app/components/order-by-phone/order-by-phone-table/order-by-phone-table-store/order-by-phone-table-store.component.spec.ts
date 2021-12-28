import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByPhoneTableStoreComponent } from './order-by-phone-table-store.component';

describe('OrderByPhoneTableStoreComponent', () => {
  let component: OrderByPhoneTableStoreComponent;
  let fixture: ComponentFixture<OrderByPhoneTableStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByPhoneTableStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByPhoneTableStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
