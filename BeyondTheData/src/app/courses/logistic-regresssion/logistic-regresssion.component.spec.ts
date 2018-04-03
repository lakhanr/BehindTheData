import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticRegresssionComponent } from './logistic-regresssion.component';

describe('LogisticRegresssionComponent', () => {
  let component: LogisticRegresssionComponent;
  let fixture: ComponentFixture<LogisticRegresssionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticRegresssionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticRegresssionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
