import { Component, OnInit } from '@angular/core';
import { BallsService } from '../services/balls.service';


@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})

export class BallSelectorComponent implements OnInit {

constructor(public ballsService: BallsService) { }

  ngOnInit(): void {
    this.ballsService.startGame();
  }
//Borramos la seleccion de bolas del apartado de apuestas
  clearSelection(): void{
    this.ballsService.clearSelection();
  }
}
