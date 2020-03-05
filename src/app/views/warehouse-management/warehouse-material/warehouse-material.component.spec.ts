import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseMaterialComponent } from './warehouse-material.component';

describe('WarehouseMaterialComponent', () => {
  let component: WarehouseMaterialComponent;
  let fixture: ComponentFixture<WarehouseMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
