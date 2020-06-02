import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanOutReportComponent } from './chalan-out-report.component';

describe('ChalanOutReportComponent', () => {
  let component: ChalanOutReportComponent;
  let fixture: ComponentFixture<ChalanOutReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanOutReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanOutReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
