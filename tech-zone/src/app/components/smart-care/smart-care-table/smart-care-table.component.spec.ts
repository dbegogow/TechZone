import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCareTableComponent } from './smart-care-table.component';

describe('SmartCareTableComponent', () => {
  let component: SmartCareTableComponent;
  let fixture: ComponentFixture<SmartCareTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCareTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
