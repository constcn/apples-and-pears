import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookListComponent } from './outlook-list.component';

describe('OutlookListComponent', () => {
  let component: OutlookListComponent;
  let fixture: ComponentFixture<OutlookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlookListComponent]
    });
    fixture = TestBed.createComponent(OutlookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
