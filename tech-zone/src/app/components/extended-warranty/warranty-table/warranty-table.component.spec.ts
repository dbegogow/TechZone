import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyTableComponent } from './warranty-table.component';

describe('WarrantyTableComponent', () => {
  let component: WarrantyTableComponent;
  let fixture: ComponentFixture<WarrantyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
