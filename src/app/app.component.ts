import { Component } from '@angular/core';
import { BallsService } from './services/balls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public ballsService: BallsService){}
  title = 'Goldenrace';
}
