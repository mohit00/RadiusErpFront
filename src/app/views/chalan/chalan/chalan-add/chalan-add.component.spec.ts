import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanAddComponent } from './chalan-add.component';

describe('ChalanAddComponent', () => {
  let component: ChalanAddComponent;
  let fixture: ComponentFixture<ChalanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
