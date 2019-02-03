import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSummaryComponent } from './sc-summary.component';

describe('ScSummaryComponent', () => {
  let component: ScSummaryComponent;
  let fixture: ComponentFixture<ScSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
