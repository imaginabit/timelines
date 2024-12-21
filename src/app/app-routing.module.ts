import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TimelinePointDetailComponent } from './timeline/timeline-point-detail/timeline-point-detail.component'; // Correct the import path

export const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'point/:id', component: TimelinePointDetailComponent } // Update this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }