import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByPhoneComponent } from './order-by-phone.component';

describe('OrderByPhoneComponent', () => {
  let component: OrderByPhoneComponent;
  let fixture: ComponentFixture<OrderByPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
