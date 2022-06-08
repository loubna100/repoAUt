import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutoComponent } from './home-tuto.component';

describe('HomeTutoComponent', () => {
  let component: HomeTutoComponent;
  let fixture: ComponentFixture<HomeTutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
