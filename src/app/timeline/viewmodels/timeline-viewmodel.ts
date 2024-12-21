import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline.model';
import { TimelinePoint } from '../models/timeline-point.model';


@Injectable({
  providedIn: 'root'
})
export class TimelineViewModel {
  public timeline: Timeline;

  constructor() {
    this.timeline = new Timeline(1, 'Project Timeline', [
      new TimelinePoint(1, 'Start Project', 'Project kickoff meeting', new Date('2023-01-01'), 'background1.jpg', 'presentation1.mp4'),
      new TimelinePoint(2, 'First Milestone', 'First milestone achieved', new Date('2023-02-01'), 'background2.jpg', 'presentation2.mp4')
    ]);
  }

  addPoint(point: TimelinePoint): void {
    this.timeline.points.push(point);
  }

  removePoint(pointId: number): void {
    this.timeline.points = this.timeline.points.filter(point => point.id !== pointId);
  }

  updatePoint(updatedPoint: TimelinePoint): void {
    const index = this.timeline.points.findIndex(point => point.id === updatedPoint.id);
    if (index !== -1) {
      this.timeline.points[index] = updatedPoint;
    }
  }
}