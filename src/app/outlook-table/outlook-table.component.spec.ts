import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookTableComponent } from './outlook-table.component';

describe('OutlookTableComponent', () => {
  let component: OutlookTableComponent;
  let fixture: ComponentFixture<OutlookTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlookTableComponent]
    });
    fixture = TestBed.createComponent(OutlookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
