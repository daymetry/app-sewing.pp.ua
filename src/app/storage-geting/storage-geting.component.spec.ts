import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageGetingComponent } from './storage.component.ts';

describe('DashboardComponent', () => {
  let component: StorageGetingComponent;
  let fixture: ComponentFixture<StorageGetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageGetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageGetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
