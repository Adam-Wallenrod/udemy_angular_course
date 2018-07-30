import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryBComponent } from './memory-b.component';

describe('MemoryBComponent', () => {
  let component: MemoryBComponent;
  let fixture: ComponentFixture<MemoryBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
