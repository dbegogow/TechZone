import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInformationBarButtonComponent } from './header-information-bar-button.component';

describe('HeaderInformationBarButtonComponent', () => {
  let component: HeaderInformationBarButtonComponent;
  let fixture: ComponentFixture<HeaderInformationBarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInformationBarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInformationBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
