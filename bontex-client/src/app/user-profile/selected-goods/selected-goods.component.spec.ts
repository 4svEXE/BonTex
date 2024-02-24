import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedGoodsComponent } from './selected-goods.component';

describe('SelectedGoodsComponent', () => {
  let component: SelectedGoodsComponent;
  let fixture: ComponentFixture<SelectedGoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedGoodsComponent]
    });
    fixture = TestBed.createComponent(SelectedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
