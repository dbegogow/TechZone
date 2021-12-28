import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByPhoneDiagramComponent } from './order-by-phone-diagram.component';

describe('OrderByPhoneDiagramComponent', () => {
  let component: OrderByPhoneDiagramComponent;
  let fixture: ComponentFixture<OrderByPhoneDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByPhoneDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByPhoneDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
