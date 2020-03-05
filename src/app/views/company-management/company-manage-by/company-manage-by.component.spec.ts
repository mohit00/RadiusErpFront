import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManageByComponent } from './company-manage-by.component';

describe('CompanyManageByComponent', () => {
  let component: CompanyManageByComponent;
  let fixture: ComponentFixture<CompanyManageByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyManageByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManageByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
