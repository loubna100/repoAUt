import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPtlComponent } from './consultation-ptl.component';

describe('ConsultationPtlComponent', () => {
  let component: ConsultationPtlComponent;
  let fixture: ComponentFixture<ConsultationPtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationPtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationPtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
