import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageRecordComponent } from './storage.component.ts';

describe('DashboardComponent', () => {
  let component: StorageRecordComponent;
  let fixture: ComponentFixture<StorageRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
