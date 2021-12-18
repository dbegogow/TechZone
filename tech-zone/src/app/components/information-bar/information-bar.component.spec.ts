import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBarComponent } from './information-bar.component';

describe('InformationBarComponent', () => {
  let component: InformationBarComponent;
  let fixture: ComponentFixture<InformationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
