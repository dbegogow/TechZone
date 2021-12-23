import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftIdeasComponent } from './gift-ideas.component';

describe('GiftIdeasComponent', () => {
  let component: GiftIdeasComponent;
  let fixture: ComponentFixture<GiftIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftIdeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
