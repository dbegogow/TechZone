import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByPhoneTableComponent } from './order-by-phone-table.component';

describe('OrderByPhoneTableComponent', () => {
  let component: OrderByPhoneTableComponent;
  let fixture: ComponentFixture<OrderByPhoneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByPhoneTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByPhoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
