import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormaterialComponent } from './vendormaterial.component';

describe('VendormaterialComponent', () => {
  let component: VendormaterialComponent;
  let fixture: ComponentFixture<VendormaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendormaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
