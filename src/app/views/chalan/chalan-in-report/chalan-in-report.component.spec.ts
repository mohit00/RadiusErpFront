import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanInReportComponent } from './chalan-in-report.component';

describe('ChalanInReportComponent', () => {
  let component: ChalanInReportComponent;
  let fixture: ComponentFixture<ChalanInReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanInReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanInReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
