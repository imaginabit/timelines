import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { TimelineComponent } from './timeline/timeline/timeline.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'timelines';
  datos: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDatos().subscribe((data: any) => {
      this.datos = data;
      console.log(data);
    });
  }
}

