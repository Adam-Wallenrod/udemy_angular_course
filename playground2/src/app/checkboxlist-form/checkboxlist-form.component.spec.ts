import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxlistFormComponent } from './checkboxlist-form.component';

describe('CheckboxlistFormComponent', () => {
  let component: CheckboxlistFormComponent;
  let fixture: ComponentFixture<CheckboxlistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxlistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxlistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
