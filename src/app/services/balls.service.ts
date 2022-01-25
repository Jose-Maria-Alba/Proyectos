import { Injectable } from '@angular/core';
import { IBall } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class BallsService {
  public balls: IBall[] = [];
  public inGame: boolean = true;
  public countBallSelected: number = 0; //Se suman las bolas seleccionadas.
  private maxBallSelected: number = 8; //El numero maximo de bolas seleccionada es de 8
  public total: number = 0;
  public amount: number = 0;
  public message: string = '';
  public minAmount: number = 5;
  
  constructor(private http: HttpClient) { }
  
  startGame() {
    this.loadBalls();
    this.total = 0;
    this.countBallSelected = 0;
    this.message = '';
    this.inGame = true;
  }
  //Cargamos el formato de color y numero de cada bola.
  loadBalls(): void {
    this.http
      .get<IBall[]>('assets/data/balls.json')
      .subscribe((balls: IBall[]) => (this.balls = balls));
  }
  //Si el numero de bolas seleccionada es menor que el maximo de bolas permitida en la apuesta, añadimos la bola
  changeState(ball: IBall): void {
    if (
      ball.selected === true ||
      this.countBallSelected < this.maxBallSelected
    ) {
      this.balls.forEach((e: IBall) =>
        ball === e ? (e.selected = !e.selected) : null
      );
    }
    this.setCountBallSelected();
  }
  //Con esto volvemos las bolas a false y borramos las seleccionadas.
  clearSelection(): void {
    this.balls.forEach((e: IBall) => (e.selected = false));
    this.setCountBallSelected()
  }
  //Contamos el numero de bolas seleccionadas
  setCountBallSelected(): void {
    this.countBallSelected = this.balls.filter(
      (e: IBall) => e.selected === true
    ).length;
    this.setTotal();
  }
  //Aqui en caso de premio, hacemos el calculo de tot
  setTotal(): void {
    this.total = this.amount * this.countBallSelected;
  }
  //Aqui controlamos que se cumpla el minimo de la apuesta que son 5€
  setAmount(amount: number): void {
    this.message = '';
    if (amount >= this.minAmount) {
      this.amount = amount;
      this.setTotal();
    } else {
      this.total = 0;
      this.message = 'The minimun amount is 5€';
    }
  }
}