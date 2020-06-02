import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanoutComponent } from './chalanout.component';

describe('ChalanoutComponent', () => {
  let component: ChalanoutComponent;
  let fixture: ComponentFixture<ChalanoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
