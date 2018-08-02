import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCenterComponent } from './task-center.component';

describe('TaskCenterComponent', () => {
  let component: TaskCenterComponent;
  let fixture: ComponentFixture<TaskCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
