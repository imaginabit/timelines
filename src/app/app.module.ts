import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TimelineModule } from './timeline/timeline.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TimelinePointDetailComponent } from './timeline/timeline-point-detail/timeline-point-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    RouterModule,
    AppComponent,
    TimelineComponent,
    TimelinePointDetailComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }