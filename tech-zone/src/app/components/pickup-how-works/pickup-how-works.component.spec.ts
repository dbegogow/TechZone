import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupHowWorksComponent } from './pickup-how-works.component';

describe('PickupHowWorksComponent', () => {
  let component: PickupHowWorksComponent;
  let fixture: ComponentFixture<PickupHowWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupHowWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupHowWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
