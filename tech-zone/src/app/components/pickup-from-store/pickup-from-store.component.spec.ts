import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupFromStoreComponent } from './pickup-from-store.component';

describe('PickupFromStoreComponent', () => {
  let component: PickupFromStoreComponent;
  let fixture: ComponentFixture<PickupFromStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupFromStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupFromStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
