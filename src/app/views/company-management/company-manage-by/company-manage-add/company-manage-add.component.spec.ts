import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManageAddComponent } from './company-manage-add.component';

describe('CompanyManageAddComponent', () => {
  let component: CompanyManageAddComponent;
  let fixture: ComponentFixture<CompanyManageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyManageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
