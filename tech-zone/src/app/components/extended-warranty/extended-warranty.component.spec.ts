import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedWarrantyComponent } from './extended-warranty.component';

describe('ExtendedWarrantyComponent', () => {
  let component: ExtendedWarrantyComponent;
  let fixture: ComponentFixture<ExtendedWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedWarrantyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
