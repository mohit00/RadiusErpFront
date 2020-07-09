import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWoDetailComponent } from './project-wo-detail.component';

describe('ProjectWoDetailComponent', () => {
  let component: ProjectWoDetailComponent;
  let fixture: ComponentFixture<ProjectWoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
