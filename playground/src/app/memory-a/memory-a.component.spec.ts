import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryAComponent } from './memory-a.component';

describe('MemoryAComponent', () => {
  let component: MemoryAComponent;
  let fixture: ComponentFixture<MemoryAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
