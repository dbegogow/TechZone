import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedOrdersComponent } from './unprocessed-orders.component';

describe('UnprocessedOrdersComponent', () => {
  let component: UnprocessedOrdersComponent;
  let fixture: ComponentFixture<UnprocessedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnprocessedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
