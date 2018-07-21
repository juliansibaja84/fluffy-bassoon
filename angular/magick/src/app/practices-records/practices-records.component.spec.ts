import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesRecordsComponent } from './practices-records.component';

describe('PracticesRecordsComponent', () => {
  let component: PracticesRecordsComponent;
  let fixture: ComponentFixture<PracticesRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticesRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticesRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
