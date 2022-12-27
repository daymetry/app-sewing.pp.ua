import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTransferComponent } from './storage.component.ts';

describe('DashboardComponent', () => {
  let component: StorageTransferComponent;
  let fixture: ComponentFixture<StorageTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
