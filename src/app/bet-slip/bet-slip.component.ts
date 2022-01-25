import { Component, OnInit } from '@angular/core';
import { IBall } from '../models';
import { BallsService } from '../services/balls.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent implements OnInit {
  constructor(public ballsService: BallsService) { }
  amount: number = 0;
  message: string = '';
  ngOnInit(): void { }
  //Cambiamos el estado de la bola seleccionada.
  select(ball: IBall): void {
    this.ballsService.changeState(ball)
  }
  
}
