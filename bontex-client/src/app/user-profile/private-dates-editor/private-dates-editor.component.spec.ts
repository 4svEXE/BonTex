import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDatesEditorComponent } from './private-dates-editor.component';

describe('PrivateDatesEditorComponent', () => {
  let component: PrivateDatesEditorComponent;
  let fixture: ComponentFixture<PrivateDatesEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateDatesEditorComponent]
    });
    fixture = TestBed.createComponent(PrivateDatesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
