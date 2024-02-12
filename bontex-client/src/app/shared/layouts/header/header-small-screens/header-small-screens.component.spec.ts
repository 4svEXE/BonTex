import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSmallScreensComponent } from './header-small-screens.component';

describe('HeaderSmallScreensComponent', () => {
  let component: HeaderSmallScreensComponent;
  let fixture: ComponentFixture<HeaderSmallScreensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSmallScreensComponent]
    });
    fixture = TestBed.createComponent(HeaderSmallScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
