import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePtlDialogComponent } from './update-ptl-dialog.component';

describe('UpdatePtlDialogComponent', () => {
  let component: UpdatePtlDialogComponent;
  let fixture: ComponentFixture<UpdatePtlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePtlDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePtlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
