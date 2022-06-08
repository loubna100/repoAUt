import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDashComponent } from './question-dash.component';

describe('QuestionDashComponent', () => {
  let component: QuestionDashComponent;
  let fixture: ComponentFixture<QuestionDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
