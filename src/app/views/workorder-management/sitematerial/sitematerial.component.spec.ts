import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitematerialComponent } from './sitematerial.component';

describe('SitematerialComponent', () => {
  let component: SitematerialComponent;
  let fixture: ComponentFixture<SitematerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitematerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
