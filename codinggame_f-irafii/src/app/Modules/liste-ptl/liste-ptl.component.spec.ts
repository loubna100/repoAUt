import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePtlComponent } from './liste-ptl.component';

describe('ListePtlComponent', () => {
  let component: ListePtlComponent;
  let fixture: ComponentFixture<ListePtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
