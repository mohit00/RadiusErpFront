import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderAppendComponent } from './workorder-append.component';

describe('WorkorderAppendComponent', () => {
  let component: WorkorderAppendComponent;
  let fixture: ComponentFixture<WorkorderAppendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkorderAppendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderAppendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
