import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFileComponent } from './addnewfile.component';

describe('AddNewFileComponent', () => {
  let component: AddNewFileComponent;
  let fixture: ComponentFixture<AddNewFileComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddNewFileComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
