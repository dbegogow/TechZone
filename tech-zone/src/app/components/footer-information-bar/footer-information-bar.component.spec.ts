import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInformationBarComponent } from './footer-information-bar.component';

describe('FooterInformationBarComponent', () => {
  let component: FooterInformationBarComponent;
  let fixture: ComponentFixture<FooterInformationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterInformationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInformationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
