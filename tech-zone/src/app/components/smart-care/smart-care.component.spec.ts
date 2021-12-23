import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCareComponent } from './smart-care.component';

describe('SmartCareComponent', () => {
  let component: SmartCareComponent;
  let fixture: ComponentFixture<SmartCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
