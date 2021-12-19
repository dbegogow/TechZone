import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInformationBarButtonComponent } from './footer-information-bar-button.component';

describe('FooterInformationBarButtonComponent', () => {
  let component: FooterInformationBarButtonComponent;
  let fixture: ComponentFixture<FooterInformationBarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterInformationBarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInformationBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
