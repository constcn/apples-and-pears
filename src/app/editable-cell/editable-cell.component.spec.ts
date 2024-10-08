import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableCellComponent } from './editable-cell.component';

describe('EditableCellComponent', () => {
  let component: EditableCellComponent;
  let fixture: ComponentFixture<EditableCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditableCellComponent]
    });
    fixture = TestBed.createComponent(EditableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
