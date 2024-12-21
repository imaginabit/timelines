import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineViewModel } from '../viewmodels/timeline-viewmodel';
import { TimelinePoint } from '../models/timeline-point.model';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-timeline-point-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './timeline-point-detail.component.html',
  styleUrls: ['./timeline-point-detail.component.scss']
})
export class TimelinePointDetailComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  point: TimelinePoint | undefined;

  constructor(
    private route: ActivatedRoute,
    private timelineViewModel: TimelineViewModel,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pointId = +params['id'];
      console.log('pointId', pointId);
      this.point = this.timelineViewModel.timeline.points.find(p => p.id === pointId);
    });
  }

  closeDetail(): void {
    console.log('closeDetail');
    this.router.navigate(['/']);
    this.close.emit();
  }
}
