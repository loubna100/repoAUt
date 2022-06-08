import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatTutoComponent } from './candidat-tuto.component';

describe('CandidatTutoComponent', () => {
  let component: CandidatTutoComponent;
  let fixture: ComponentFixture<CandidatTutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatTutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
