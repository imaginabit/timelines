import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelinePointDetailComponent } from './timeline-point-detail/timeline-point-detail.component';

const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'point/:id', component: TimelinePointDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), TimelineComponent, TimelinePointDetailComponent],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
