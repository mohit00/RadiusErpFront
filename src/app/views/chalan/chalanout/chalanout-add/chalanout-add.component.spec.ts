import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanoutAddComponent } from './chalanout-add.component';

describe('ChalanoutAddComponent', () => {
  let component: ChalanoutAddComponent;
  let fixture: ComponentFixture<ChalanoutAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanoutAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanoutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
