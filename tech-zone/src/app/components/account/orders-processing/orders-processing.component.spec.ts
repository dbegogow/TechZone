import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProcessingComponent } from './orders-processing.component';

describe('OrdersProcessingComponent', () => {
  let component: OrdersProcessingComponent;
  let fixture: ComponentFixture<OrdersProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
