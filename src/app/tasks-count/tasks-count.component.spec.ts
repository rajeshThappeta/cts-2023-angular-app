import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCountComponent } from './tasks-count.component';

describe('TasksCountComponent', () => {
  let component: TasksCountComponent;
  let fixture: ComponentFixture<TasksCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksCountComponent]
    });
    fixture = TestBed.createComponent(TasksCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
