import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmworkorderComponent } from './pmworkorder.component';

describe('PmworkorderComponent', () => {
  let component: PmworkorderComponent;
  let fixture: ComponentFixture<PmworkorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmworkorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmworkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
