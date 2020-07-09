import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanApproveComponent } from './chalan-approve.component';

describe('ChalanApproveComponent', () => {
  let component: ChalanApproveComponent;
  let fixture: ComponentFixture<ChalanApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
