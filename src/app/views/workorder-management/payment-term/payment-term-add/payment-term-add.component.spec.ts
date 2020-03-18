import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermAddComponent } from './payment-term-add.component';

describe('PaymentTermAddComponent', () => {
  let component: PaymentTermAddComponent;
  let fixture: ComponentFixture<PaymentTermAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTermAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTermAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
