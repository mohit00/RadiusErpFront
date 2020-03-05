import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAddComponent } from './vertical-add.component';

describe('VerticalAddComponent', () => {
  let component: VerticalAddComponent;
  let fixture: ComponentFixture<VerticalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
