import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBarButtonComponent } from './header-information-bar-button.component';

describe('InformationBarButtonComponent', () => {
  let component: InformationBarButtonComponent;
  let fixture: ComponentFixture<InformationBarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
