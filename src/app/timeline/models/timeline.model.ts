import { TimelinePoint } from './timeline-point.model';

export class Timeline {
  constructor(
    public id: number,
    public title: string,
    public points: TimelinePoint[]
  ) {}
}