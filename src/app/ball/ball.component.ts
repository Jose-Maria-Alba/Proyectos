import { Component, Input, OnInit } from '@angular/core';
import { IBall } from '../models';
import { BallsService } from '../services/balls.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit {
  @Input()
  ball!: IBall;
  constructor(public ballsService: BallsService) { }
  ngOnInit(): void {
  }
  //Si el valor de inGame sigue siendo true, cambiamos el valor de la bola seleccionada a true
  select(ball: IBall) {
    if (this.ballsService.inGame) {
      this.ballsService.changeState(ball);
    }
  }
}