import { Component, OnInit } from '@angular/core';
import { TimelineViewModel } from '../viewmodels/timeline-viewmodel';
import { TimelinePoint } from '../models/timeline-point.model';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TimelinePointDetailComponent } from '../timeline-point-detail/timeline-point-detail.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RouterModule, TimelinePointDetailComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  selectedPoint: TimelinePoint | null = null;

  constructor(public timelineViewModel: TimelineViewModel, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Handle route parameters if needed
      // console.log(params);
    });
  }

  addPoint(): void {
    const newPoint = new TimelinePoint(
      this.timelineViewModel.timeline.points.length + 1,
      'New Point',
      'Description of new point',
      new Date(),
      'background.jpg',
      'presentation.mp4'
    );
    this.timelineViewModel.addPoint(newPoint);
  }

  removePoint(pointId: number): void {
    this.timelineViewModel.removePoint(pointId);
  }

  selectPoint(pointId: number): void {
    this.selectedPoint = this.timelineViewModel.timeline.points.find(p => p.id === pointId) || null;
    this.router.navigate(['/point', pointId]);
  }

  closeDetail(): void {
    console.log('closeDetail in TimelineComponent');
    this.selectedPoint = null;
  }

}