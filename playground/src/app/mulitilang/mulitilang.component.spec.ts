import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitilangComponent } from './mulitilang.component';

describe('MulitilangComponent', () => {
  let component: MulitilangComponent;
  let fixture: ComponentFixture<MulitilangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulitilangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulitilangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
