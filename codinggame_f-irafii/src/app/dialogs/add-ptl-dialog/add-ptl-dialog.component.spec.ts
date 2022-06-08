import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPtlDialogComponent } from './add-ptl-dialog.component';

describe('AddPtlDialogComponent', () => {
  let component: AddPtlDialogComponent;
  let fixture: ComponentFixture<AddPtlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPtlDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPtlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
