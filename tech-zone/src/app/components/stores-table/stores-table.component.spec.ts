import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresTableComponent } from './stores-table.component';

describe('StoresTableComponent', () => {
  let component: StoresTableComponent;
  let fixture: ComponentFixture<StoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
