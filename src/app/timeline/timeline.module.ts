import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineRoutingModule } from './timeline-routing.module';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    TimelineRoutingModule
  ],
  providers: [DatePipe],
})
export class TimelineModule { }
