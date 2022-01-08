import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProcessingProductComponent } from './orders-processing-product.component';

describe('OrdersProcessingProductComponent', () => {
  let component: OrdersProcessingProductComponent;
  let fixture: ComponentFixture<OrdersProcessingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersProcessingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersProcessingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
