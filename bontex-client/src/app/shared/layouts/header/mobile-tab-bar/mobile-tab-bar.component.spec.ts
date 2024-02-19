import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTabBarComponent } from './mobile-tab-bar.component';

describe('MobileTabBarComponent', () => {
  let component: MobileTabBarComponent;
  let fixture: ComponentFixture<MobileTabBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileTabBarComponent]
    });
    fixture = TestBed.createComponent(MobileTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
