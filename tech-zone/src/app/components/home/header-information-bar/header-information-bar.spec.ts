import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInformationBarComponent } from './header-information-bar.component';

describe('HeaderInformationBarComponent', () => {
  let component: HeaderInformationBarComponent;
  let fixture: ComponentFixture<HeaderInformationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInformationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInformationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
