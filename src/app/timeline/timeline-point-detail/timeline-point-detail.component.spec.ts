import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePointDetailComponent } from './timeline-point-detail.component';

describe('TimelinePointDetailComponent', () => {
  let component: TimelinePointDetailComponent;
  let fixture: ComponentFixture<TimelinePointDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePointDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
