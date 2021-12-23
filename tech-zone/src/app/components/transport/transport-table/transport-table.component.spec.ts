import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTableComponent } from './transport-table.component';

describe('TransportTableComponent', () => {
  let component: TransportTableComponent;
  let fixture: ComponentFixture<TransportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
