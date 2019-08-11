import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselHeaderComponent } from './coursel-header.component';

describe('CourselHeaderComponent', () => {
  let component: CourselHeaderComponent;
  let fixture: ComponentFixture<CourselHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
