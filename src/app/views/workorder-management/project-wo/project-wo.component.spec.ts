import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWoComponent } from './project-wo.component';

describe('ProjectWoComponent', () => {
  let component: ProjectWoComponent;
  let fixture: ComponentFixture<ProjectWoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
