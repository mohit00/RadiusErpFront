import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitematerialAddComponent } from './sitematerial-add.component';

describe('SitematerialAddComponent', () => {
  let component: SitematerialAddComponent;
  let fixture: ComponentFixture<SitematerialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitematerialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitematerialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
