import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestUserComponent } from './rest-user.component';

describe('RestUserComponent', () => {
  let component: RestUserComponent;
  let fixture: ComponentFixture<RestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
