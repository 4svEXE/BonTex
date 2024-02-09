import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDatesComponent } from './private-dates.component';

describe('PrivateDatesComponent', () => {
  let component: PrivateDatesComponent;
  let fixture: ComponentFixture<PrivateDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateDatesComponent]
    });
    fixture = TestBed.createComponent(PrivateDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
