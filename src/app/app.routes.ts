import { Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TimelinePointDetailComponent } from './timeline/timeline-point-detail/timeline-point-detail.component';

export const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'point/:id', component: TimelinePointDetailComponent }
];
