import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanpmComponent } from './chalanpm.component';

describe('ChalanpmComponent', () => {
  let component: ChalanpmComponent;
  let fixture: ComponentFixture<ChalanpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
