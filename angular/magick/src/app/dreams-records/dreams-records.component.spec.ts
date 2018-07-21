import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsRecordsComponent } from './dreams-records.component';

describe('DreamsRecordsComponent', () => {
  let component: DreamsRecordsComponent;
  let fixture: ComponentFixture<DreamsRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
