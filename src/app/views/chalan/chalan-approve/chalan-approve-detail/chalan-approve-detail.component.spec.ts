import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanApproveDetailComponent } from './chalan-approve-detail.component';

describe('ChalanApproveDetailComponent', () => {
  let component: ChalanApproveDetailComponent;
  let fixture: ComponentFixture<ChalanApproveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanApproveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanApproveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
