import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalanpmAddComponent } from './chalanpm-add.component';

describe('ChalanpmAddComponent', () => {
  let component: ChalanpmAddComponent;
  let fixture: ComponentFixture<ChalanpmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalanpmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalanpmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
